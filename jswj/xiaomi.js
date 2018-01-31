/**
 * Created by Administrator on 2018/1/27.
 */
window.onload=function () {
    // banner
    let ul=document.querySelectorAll('.xxk li.blok');
    let  ce=document.querySelectorAll('.banner ul.bannerce li');
    let  bt=document.querySelector('div.banner');
         for(let i=0;i<ce.length;i++){
             ce[i].onmouseover=function(){
                 ul[i].style.display='block';
             }
             ce[i].onmouseout=function(){
                 ul[i].style.display='none';
             }
             ul[i].onmouseover=function () {
                 ul[i].style.display='block';
             }
             ul[i].onmouseout=function () {
                 ul[i].style.display='none';
             }
         };
     // banner图
     let tu=document.querySelectorAll('ul.bannertu li');
     let dian=document.querySelectorAll('.banner .bannerdian li');
     let  n=0;
        function move() {
        n++;
        if(n>=tu.length){
            n=0;
        }
        tu.forEach(function (v,i) {
            v.className='';
            dian[i].classList.remove('dian');
        });
        tu[n].className='blc';
        dian[n].classList.add('dian');
    }
       let t=setInterval(move,3500);
        bt.onmousemove=function () {
            clearInterval(t);
    }
       bt.onmouseout=function () {
        t=setInterval(move,3500);
    }
    document.querySelector('.banner ul.bannerjiantou li.jiantouyou').onclick=function () {
        move();
    }
    document.querySelector('.banner ul.bannerjiantou li.jiantouzuo').onclick=function () {
        function move1() {
            n--;
            if(n<0){
                n=tu.length-1;
            }
            tu.forEach(function (v,i) {
                v.className='';
            });
            tu[n].className='blc';
        }
        return move1();
}
       dian.forEach(function (val,index) {
           val.onclick=function () {
               dian.forEach(function (h,i) {
                   h.classList.remove('dian');
                    tu[i].className='';
               })
               dian[index].classList.add('dian');
               tu[index].className='blc';
               n=index;
           }
       });


    // 明星单品
             let dp=document.querySelectorAll('div.star div.xia1');
             let star=document.querySelector('.star');
             let djr=document.querySelector('.star .shang1 .you1 div.jiantouyou');
            let djl=document.querySelector('.star .shang1 .you1 .jiantouzuo');
            let width=parseInt(getComputedStyle(star,null).width);
                    djr.onclick=function(){
                        animate(dp[0],{left:-width});
                        animate(dp[1],{left:0},400);
                    }

                    djl.onclick=function(){
                        animate(dp[1],{left:width});
                        animate(dp[0],{left:0},400);
                    }
// 推荐
    let dpt=document.querySelectorAll('div.star div.xiat');
    let djrt=document.querySelector('.star .shangt .you1 div.jiantouyou');
    let djlt=document.querySelector('.star .shangt .you1 .jiantouzuo');
    djrt.onclick=function(){
        animate(dpt[0],{left:-width});
        animate(dpt[1],{left:0},400);
    }
    djlt.onclick=function(){
        animate(dpt[1],{left:width});
        animate(dpt[0],{left:0},400);
    }

// 家电
    function xiaomi(q,w) {
        let jd=document.querySelectorAll(q);
        let jdx=document.querySelectorAll(w);
        jd.forEach(function (v,i) {
            v.onmouseover=function () {
                jd.forEach(function (a,b) {
                    a.classList.remove('sb');
                    jdx[b].classList.remove('xiayoublc');
                });
                this.classList.add('sb');
                jdx[i].classList.add('xiayoublc');
            }})
    }
    xiaomi('.wai .you a','.wai .xia .xiayou');
    xiaomi('.zhiwai .you2 a','.zhiwai .xia .xiayou');
    xiaomi('.dawai .you3 a','.dawai .xia .xiayou');
    xiaomi('.peiwai .you3 a','.peiwai .xia .xiayou');
    xiaomi('.zhouwai .you3 a','.zhouwai .xia .xiayou');

    // 内容
   function lxlb(lie) {
       let nr=document.querySelector(lie);
       let nrw=parseInt(getComputedStyle(nr,null).width);
       let nrd=nr.querySelectorAll('.neiliezi');
       let nrdr=nr.querySelector('.zy .dr');
       let nrdl=nr.querySelector('.zy .dl');
       let lbd=nr.querySelectorAll('.lunbo .lun');
       let now=0;
       let next;
       nrdr.onclick=function () {
           next=now + 1;
           if(next<=nrd.length-1){
               animate(nrd[now],{left:-nrw});
               lbd.forEach(function (vall) {
                   vall.classList.remove('nrlbd');
               })
               animate(nrd[next],{left:0});
               lbd[next].classList.add('nrlbd');
           }
           now=next;
           if(now>=nrd.length){
               now=nrd.length-1;
           }
       }
       nrdl.onclick=function () {
           next=now - 1;
           if(now>0){
               animate(nrd[now],{left:nrw});
               lbd.forEach(function (vall) {
                   vall.classList.remove('nrlbd');
               })
               animate(nrd[next],{left:0});
               lbd[next].classList.add('nrlbd');
           }
           now=next;
           if(now<0){
               now=0;
           }
       }
       lbd.forEach(function (dom,w) {
           dom.onclick=function () {
               lbd.forEach(function (z) {
                   z.classList.remove('nrlbd');
               });
               lbd[w].classList.add('nrlbd');
               if(w>=now){
                   next=now+1;
                   if(next<=nrd.length-1){
                       animate(nrd[now],{left:-nrw});
                       animate(nrd[next],{left:-nrw});
                       animate(nrd[w],{left:0});

                   }
                   now=w;
                   if(now>=nrd.length-1){
                       now=nrd.length-1;
                   }
               }
               if(w<now){
                   next=now - 1;
                   if(now>=0){
                       animate(nrd[now],{left:nrw});
                       animate(nrd[next],{left:nrw});
                       animate(nrd[w],{left:0});
                   }
                   now=w;
                   if(now<=0){
                       now=0;
                   }
               }
           }
       })
   }
   lxlb('.neilie');
    lxlb('.neilie3');
    lxlb('.neilie2');
    lxlb('.neilie4');
    
    // 导航
     let  dz=document.querySelectorAll('.daozhong a');
     let dx=document.querySelector('.daox');
     let dxk=document.querySelectorAll('.daox .dxxk');
     dz.forEach(function (domd,dind) {
         domd.onmouseover=function () {
             dz.forEach(function (dv,di) {
                 dv.classList.remove('dcol');
             })
            dz[dind].classList.add('dcol');
             dxk.forEach(function (dv2,dv1) {
                 dv2.classList.remove('dblc');

             })
             dxk[dind].classList.add('dblc');
              animate(dx,{height:300},0);
         }
         domd.onmouseout=function () {
                 dz.forEach(function (dv1,di) {
                     dv1.classList.remove('dcol');
                 })
                 dxk.forEach(function (dv21,dv1) {
                     dv21.classList.remove('dblc');
                 })
                 animate(dx,{height:0},0);
         }
     })
}
