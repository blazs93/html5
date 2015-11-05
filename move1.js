function move1(pname,px,py,pmap){
  $("body").trigger({
    type: "refreshmap",
    name: pname,
    walk: Math.floor(Math.random()*4)
  });
}