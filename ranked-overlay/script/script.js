const connectCode = 'OOLO#238';
const query = `fragment userProfilePage on User {
    displayName
    connectCode {
            code
            __typename
        }
        rankedNetplayProfile {
            id
            ratingOrdinal
            ratingUpdateCount
            wins
            losses
            dailyGlobalPlacement
            dailyRegionalPlacement
            continent
            characters {
                    id
                    character
                    gameCount
                    __typename
                    }
            __typename
            }
        __typename
    }
    query AccountManagementPageQuery($cc: String!) {
        getConnectCode(code: $cc) {
            user {
                    ...userProfilePage
                    __typename
                    }
            __typename
            }
    }`;

const req = 
console.log( req);
async function req(){
    let result;
    await fetch('https://gql-gateway-dot-slippi.uc.r.appspot.com/graphql', {
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            operationName: 'AccountManagementPageQuery',
            query,
            variables: { cc: connectCode },
        }),
        method: 'POST',
        })
        .then((res) => {result = JSON.parse(res)})
        return(result);
}
function getRank(rating, games, globalPlacement, regionalPlacement){
    if(games < 5){
        return 'Unranked';
    }else if(rating >= 2191.75 && globalPlacement != null && regionalPlacement != null){
        return 'Grandmaster';
    }else if(rating >= 2350){
        return 'Master 3';
    }else if(rating >= 2275){
        return 'Master 2';
    }else if(rating >= 2191.75){
        return 'Master 1';
    }else if(rating >= 2136.28){
        return 'Diamond 3';
    }else if(rating >= 2073.67){
        return 'Diamond 2';
    }else if(rating >= 2003.92){
        return 'Diamond 1';
    }else if(rating >= 1927.03){
        return 'Platinum 3';
    }else if(rating >= 1843){
        return 'Platinum 2';
    }else if(rating >= 1751.83){
        return 'Platinum 1';
    }else if(rating >= 1653.52){
        return 'Gold 3';
    }
}