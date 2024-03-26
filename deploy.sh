declare -a networks=("ethereum")
SUBGRAPH=strat
DIRECTORY=strat
USER=trash200
ACCESS_TOKEN=ACCESS_TOKEN_HERE
for network in "${networks[@]}"
do
    echo "BUILD $network $DIRECTORY"
    NETWORK=$network pnpm exec turbo run build --scope=$DIRECTORY --force
    echo "DEPLOYING TO $USER/$SUBGRAPH-$network"
    cd subgraphs/$DIRECTORY/ && pnpm exec graph deploy --product hosted-service $USER/$SUBGRAPH-$network --access-token $ACCESS_TOKEN
#    cd ../../
done