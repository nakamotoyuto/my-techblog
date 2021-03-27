import fetch from 'isomorphic-unfetch';

export async function get(_, res) {
  const id = '170a56ac12fb4a42af8797db87275512'
  const token = 'ad2dab37797b472503a024ad749337d4c11abeb716e1ad560265865d2ba6b34d0ea92591fcb7b358f4ac03580585401529ba2e61bacc50f6175380b77287b77fb9868250d1d07141ed1cc5c52be3'
  const { data } = fetch('https://notion-api.splitbee.io/v1/table/'+id,{
      headers: { Authorization: `Bearer: ${token}` }
    }

  )
  console.log(data);
  return {
    ITEM: data
  }
  fetch(`https://nytechblog.microcms.io/api/v1/blog/`, {
    headers: { "X-API-KEY" : process.env.API_KEY }
  })
    .then(res => res.json())
    .then(json => {
      res.writeHead(200, {
          'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(json))
    });
}