import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

class ServerSideDatasource {     
    
    constructor() {
        this.client = new ApolloClient({
          uri: 'http://localhost:4000/graphql',
          cache: new InMemoryCache(),
        });
    }

        getRows(params){
            console.log()
            let startRow = params.request.startRow
            let endRow = params.request.endRow
            this.client
            .query({
              query: gql`
                query GetRows(
                  $startRow: Int!
                  $endRow: Int!
                ) {
                  getRows(
                      startRow: $startRow
                      endRow: $endRow
                  ){
                      
                          rows{make model price}
                          lastRow
                      
                  }
                }`,
                variables: {
                    startRow,
                    endRow,
                }
                })
                .then((res) => {
                    return res.data.getRows
                }).then(({rows, lastRow}) => {
                    params.success({ rowData: rows, lastRow: lastRow });
                  })
                  .catch((err) => {
                      console.log(err)
                    console.log(JSON.stringify(err, null, 2));
                    params.fail();
                  })
    }

}

export default ServerSideDatasource;