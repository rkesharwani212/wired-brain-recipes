import api from  "./api";

export const ACTION_TYPES={
    CREATE:"CREATE",
    UPDATE:"UPDATE",
    DELETE:"DELETE",
    FETCH_ALL:"FETCH_ALL"
}

export const fetchAll=()=>dispatch=>{
    api.book().fetchAll()
    .then(response=>{
    //    console.log(response.data)
        dispatch({
            type:ACTION_TYPES.FETCH_ALL,
            payload:response.data
            })
        }
    )
    .catch(err=>console.log(err));
    
}

export const create=(data,onSuccess)=>dispatch=>{
    api.book().create(data)
    .then(res=>{
        console.log(res.data)
        dispatch({
            type:ACTION_TYPES.CREATE,
            payload:data
        })
        onSuccess();
    })
    .catch(err=>console.log(err));
}

export const update=(id,data,onSuccess)=>dispatch=>{
    api.book().update(id,data)
    .then(res=>{
        dispatch({
            type:ACTION_TYPES.UPDATE,
            payload:{id,...data}
        })
        onSuccess();
    })
    .catch(err=>console.log(err));
}

export const Delete=(id, onSuccess)=>dispatch=>{
    api.book().delete(id)
    .then(res=>{
        dispatch({
            type:ACTION_TYPES.DELETE,
            payload:id
        })
        onSuccess();
    })
    .catch(err=>console.log(err));
}