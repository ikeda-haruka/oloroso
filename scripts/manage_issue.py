"""GitHub Issue Management Script for Estudio Oloroso.

Usage:
    # Issue 作成 (未完了・オープン状態)
    python scripts/manage_issue.py create --title "[FEAT] ..." --body "..." --labels "cat:page,priority:high"

    # Issue 作成と同時に完了クローズ
    python scripts/manage_issue.py create --title "[FIX] ..." --body "..." --labels "cat:system,status:done" --close

    # 既存 Issue のクローズ
    python scripts/manage_issue.py close --number 71 --comment "対応完了しました"

    # Issue 一覧表示
    python scripts/manage_issue.py list
"""

import argparse
import json
import subprocess
import sys
import urllib.error
import urllib.request


def get_github_token() -> str:
    res = subprocess.run(
        ["git", "credential", "fill"],
        input="protocol=https\nhost=github.com\n",
        text=True,
        capture_output=True,
    )
    token = None
    for line in res.stdout.splitlines():
        if line.startswith("password="):
            token = line.split("password=")[1]
    if not token:
        raise ValueError("GitHub token could not be retrieved via git credential helper.")
    return token


REPO = "ikeda-haruka/oloroso"


def api_request(endpoint: str, data: dict | None = None, method: str = "GET") -> dict:
    token = get_github_token()
    headers = {
        "Authorization": f"Bearer {token}",
        "Accept": "application/vnd.github+json",
        "User-Agent": "Antigravity-Agent",
    }
    url = f"https://api.github.com/repos/{REPO}/{endpoint}"
    payload = json.dumps(data).encode("utf-8") if data is not None else None

    req = urllib.request.Request(url, data=payload, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode()
        print(f"API Error ({e.code}): {err_msg}", file=sys.stderr)
        raise


def create_issue(title: str, body: str, labels: list[str], close_now: bool = False):
    payload = {
        "title": title,
        "body": body,
        "labels": labels,
    }
    issue = api_request("issues", data=payload, method="POST")
    number = issue["number"]
    url = issue["html_url"]
    print(f"Created Issue #{number}: {title}")
    print(f"URL: {url}")

    if close_now:
        if "status:done" not in labels:
            labels.append("status:done")
        close_payload = {"state": "closed", "labels": labels}
        api_request(f"issues/{number}", data=close_payload, method="PATCH")
        print(f"Closed Issue #{number} (Status: Done)")

    return issue


def close_issue(number: int, comment: str | None = None):
    if comment:
        api_request(f"issues/{number}/comments", data={"body": comment}, method="POST")
    issue = api_request(f"issues/{number}", data={"state": "closed"}, method="PATCH")
    print(f"Closed Issue #{number}: {issue['title']}")
    return issue


def list_issues(state: str = "open"):
    issues = api_request(f"issues?state={state}&per_page=20&sort=created&direction=desc")
    for it in issues:
        print(f"#{it['number']} [{it['state']}] {it['title']} ({it['html_url']})")


def main():
    parser = argparse.ArgumentParser(description="Manage GitHub Issues")
    subparsers = parser.add_subparsers(dest="command", required=True)

    # create
    create_p = subparsers.add_parser("create")
    create_p.add_argument("--title", required=True, help="Issue Title")
    create_p.add_argument("--body", default="", help="Issue Description / Body")
    create_p.add_argument("--labels", default="", help="Comma-separated labels")
    create_p.add_argument("--close", action="store_true", help="Close issue immediately after creation")

    # close
    close_p = subparsers.add_parser("close")
    close_p.add_argument("--number", type=int, required=True, help="Issue Number")
    close_p.add_argument("--comment", default=None, help="Closing comment")

    # list
    list_p = subparsers.add_parser("list")
    list_p.add_argument("--state", default="open", choices=["open", "closed", "all"])

    args = parser.parse_args()

    if args.command == "create":
        labels = [l.strip() for l in args.labels.split(",") if l.strip()] if args.labels else []
        create_issue(args.title, args.body, labels, args.close)
    elif args.command == "close":
        close_issue(args.number, args.comment)
    elif args.command == "list":
        list_issues(args.state)


if __name__ == "__main__":
    main()
