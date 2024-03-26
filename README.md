# Wagmi Subgraph

TheGraph exposes a GraphQL endpoint to query the events and entities within Wagmi ecosystem.

Currently, there are multiple subgraphs, but additional subgraphs can be added to this repository, following the current architecture.

This repository contains multiple subgraphs:  

- [v3](./subgraphs/v3/README.md) 

## Subgraphs
1. **Exchange (v3)**: Tracks all Wagmi V3 Exchange data with price, volume, liquidity
    - [zkSync](https://api.studio.thegraph.com/query/53494/v3-zksync-era/version/latest)
    - [Fantom](https://api.studio.thegraph.com/query/53494/v3-fantom/version/latest)
    - [Kava](https://kava.graph.wagmi.com/subgraphs/name/v3)
    - [Metis](https://metis.graph.wagmi.com/subgraphs/name/v3)
    - [Ethereum](https://api.studio.thegraph.com/query/53494/v3/version/latest)
   
## Build

```sh
NETWORK=polygon pnpm exec turbo run build --scope=<SUBGRAPH_NAME> --force
```

## Testing

[Matchstick documentation](https://thegraph.com/docs/developer/matchstick)

```sh
# Run all tests
pnpm exec turbo run test --scope=<SUBGRAPH_NAME>

# Run single test
pnpm exec turbo run test -- <TEST> --scope=<SUBGRAPH_NAME>
```

## Deployment script

add a deploy.sh in the root dir with:
```sh
# V3 DEPLOYMENT
declare -a networks=("ethereum" "gnosis" "moonbeam" "optimism")
SUBGRAPH=v3
DIRECTORY=v3
USER=wagmi
ACCESS_TOKEN=SET_YOUR_ACCESS_TOKEN_HERE
for network in "${networks[@]}"
do
    echo "BUILD $network $DIRECTORY" 
    NETWORK=$network pnpm exec turbo run build --scope=$DIRECTORY --force
    echo "DEPLOYING TO $USER/$SUBGRAPH-$network" 
    cd subgraphs/$DIRECTORY/ && pnpm exec graph deploy --product hosted-service $USER/$SUBGRAPH-$network --access-token $ACCESS_TOKEN
    cd ../../
done
```
