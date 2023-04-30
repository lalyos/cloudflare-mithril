export async function onRequest(context) {
    const ps = context.env.DB.prepare('SELECT * from vip');
    const data = await ps.all();
  
    return Response.json(data.results);
  }