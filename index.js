let val;
if(localStorage.getItem('1') == null)
        {
            val = 1;
            localStorage.setItem('1' , 1);
        }
    val  = localStorage.getItem('1');
    let p = document.getElementById('counter');
    p.innerHTML = `${val.length}`;
    localStorage.setItem('1' , val+1);
    console.log(val+1);
