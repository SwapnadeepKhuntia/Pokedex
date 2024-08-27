function useDebounce(cd,delay=2000) {
    let timeid;
    return (...args) =>{
      console.log(args);
      clearTimeout(timeid);
      timeid =  setTimeout(()=>{
       cd(...args);
      },delay)

    }
} 

export default useDebounce;