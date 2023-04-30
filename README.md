
## CReate D1 db

```
npx wrangler d1 create mithril
npx wrangler d1 execute mithril --file init.sql
```

locally
```
npx wrangler d1 execute mithril --file init.sql --local -y
```

## Select data

```
npx wrangler d1 execute mithril --command 'select * from vip'
```

## Local dev
```
npx wrangler pages dev --d1=DB  --persist  .
```

## View logs
```

```

## Api Access

```
export CF_ACCOUNT_ID=8f85db546c615569faeb6fd019aa9796
export CF_API_TOKEN=$(sed -n 's/oauth_token = "\([^"]*\)"/\1/p' ~/Library/Preferences/.wrangler/config/default.toml)

curl -sH "Authorization: Bearer ${CF_API_TOKEN}" \
  https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/pages/projects \
   | jq .result[].name
```