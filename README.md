## To deploy this subgraph

1. Create a new subgraph in The Graph Hosted service

You will then have a `username/subgraphname` that you will use later.

2. Clone the repo:

```
git clone git@github.com:dabit3/erc20-subgraph-starter.git
```

3. Install dependencies

```sh
npm install

# or

yarn
````

4. Update the `deploy` script in `package.json` to match the name of your subgraph:

```javascript
"deploy": "graph deploy --node https://api.thegraph.com/deploy/ dabit3/erc20subgraphtst"

# update
dabit3/erc20subgraphtst"

# to 
your-username/your-subgraphname"
```

5. Authenticate

```sh
graph auth
```

6. Deploy

```sh
yarn deploy
```

Example query

```graphql
{
  accounts {
    ERC20balances {
      id 
      value
      contract {
        name
      }
    }
  }
}
```
