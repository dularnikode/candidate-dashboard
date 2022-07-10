export const getSortedData  = (dataArray)=> {
    dataArray.sort((a, b) => {
      const result = a.first_name.localeCompare(b.first_name);
      return result !== 0 ? result : a.last_name.localeCompare(b.last_name);
    });
    return dataArray.map((item,index)=>{
        return {
          ...item,
          id:index+1
        }
    });
}