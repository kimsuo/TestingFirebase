export function pushtoarray(docs){
    const data =[];
    docs.forEach(d => {
        data.push({
            id:d.id,
            ...d.data(),
    
        });
    });
    
    return data;
    
    }
