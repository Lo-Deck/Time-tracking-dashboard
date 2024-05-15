const choosePeriod = document.querySelectorAll('.choosePeriod');
const hours = document.querySelectorAll('.hours');
const previous = document.querySelectorAll('.previous');
const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');


let array = [];


fetch('./data.json').then( res => res.json())
                    .then( (data) =>  {
                        array = data;
                    });
                 

for(let i = 0; i < choosePeriod.length; i++)
{

    choosePeriod[i].addEventListener('click', function() {

        if(i === 0)
        {
            daily.classList.add('active');
            weekly.classList.remove('active');
            monthly.classList.remove('active'); 

           hours.forEach( (item, index) => { 

                item.innerText = `${array[index].timeframes.daily.current}hrs`;

            });   

           previous.forEach( (item, index) => { 

                item.innerText = `Last Week - ${array[index].timeframes.daily.previous}hrs`;

           });   
            
        }


        if(i === 1)
        {
            daily.classList.remove('active');
            weekly.classList.add('active');
            monthly.classList.remove('active');

            hours.forEach( (item, index) => { 

                item.innerText = `${array[index].timeframes.weekly.current}hrs`;

            });   

           previous.forEach( (item, index) => { 

                item.innerText = `Last Week - ${array[index].timeframes.weekly.previous}hrs`;

           }); 

        }

        if(i === 2)
        {
            daily.classList.remove('active');
            weekly.classList.remove('active');
            monthly.classList.add('active');  

            hours.forEach( (item, index) => { 

                item.innerText = `${array[index].timeframes.monthly.current}hrs`;

            });   

           previous.forEach( (item, index) => { 

                item.innerText = `Last Week - ${array[index].timeframes.monthly.previous}hrs`;

           }); 

        }
        
    } );

}
