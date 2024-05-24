

window.addEventListener("load",checkIinternetConnection);

function checkIinternetConnection(){
  const statusTest=document.getElementById('statusTest');
  const IPAddress=document.getElementById('IPAddress');
  const network=document.getElementById('network');

statusTest.textContent='checking...';


if(navigator.onLine){
  fetch('https://api.ipify.org?format=json')
  .then((response)=> response.json())
  .then((data)=>{

   IPAddress.textContent=data.ip;
   statusTest.textContent='connected';

   const connection=navigator.connection;
   const networkstrength=connection ?connection.downlink +'mbps' : 'Unknown';
   network.textContent=networkstrength;

  })
  .catch(()=>{
    statusTest.textContent='disconnected';
    IPAddress.textContent='__';
    network.textContent='__';
  })

}else{
  statusTest.textContent='disconnected';
  IPAddress.textContent='__';
  network.textContent='__';
}

}
