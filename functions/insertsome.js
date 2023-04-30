export async function onRequest(context) {
    const info = context.env.DB.prepare(`insert into vip VALUES 
    ('delme', 44), 
    ('delme', 55 ), 
    ('delme',66), 
    ('delme',77)
    `)
      .run()
    return Response.json(info);
  }