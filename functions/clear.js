export async function onRequest(context) {
    console.log("DB:", context.env.DB)
    const info  = await context.env.DB.prepare("delete FROM vip WHERE name='delme'")
      .run()
    return Response.json(info);
  }