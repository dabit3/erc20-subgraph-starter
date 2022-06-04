## To deploy this subgraph

1. Clone the repo:

```
git clone git@github.com:dabit3/erc20-subgraph-starter.git
```

2. Install dependencies

```sh
npm install

# or

yarn
````

3. Update the `deploy` script in `package.json` to match the name of your subgraph:

```javascript
"deploy": "graph deploy --node https://api.thegraph.com/deploy/ dabit3/erc20subgraphtst"

# update
dabit3/erc20subgraphtst"

# to 
your-username/your-subgraphname"
```