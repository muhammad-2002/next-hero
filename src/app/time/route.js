export const dynamic = 'force-static'
export async function  GET(){
    return Response.json({
        currentTime: new Date().toLocaleTimeString()
    })
}