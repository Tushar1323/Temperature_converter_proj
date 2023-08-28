function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  
  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  
  function fahrenheitToKelvin(fahrenheit) {
    const celsius = fahrenheitToCelsius(fahrenheit);
    return celsiusToKelvin(celsius);
  }
  
  function kelvinToFahrenheit(kelvin) {
    const celsius = kelvinToCelsius(kelvin);
    return celsiusToFahrenheit(celsius);
  }
 
    const from_str_select = document.getElementById("from");
    const inn_value = document.getElementById("inn");
    const to_str_select = document.getElementById("to");
    const outt_value = document.getElementById("outt");
    inn_value.addEventListener('keyup', () => {
        convertTemperature();
    });
    

 function convertTemperature(){
    
    const temp=parseFloat(inn_value.value);
    const unit=from_str_select.value;
    const con=to_str_select.value;
    var cha=document.querySelector(".inp")
    
    if(!isNaN(temp)){
        let c,f,k;
        outt_value.value=NaN;
        if(unit=='Celsius'){
            c=temp;
            f=celsiusToFahrenheit(c);
            k = celsiusToKelvin(c);
            if(con=='Fahrenheit'){
                outt_value.value=`${f.toFixed(2)}`
            }
            if(con=='Kelvin'){
                outt_value.value=`${k.toFixed(2)}`
            }
            if(con=='Celsius'){
                outt_value.value=`${c}`
            }
        
        } else if (unit === 'Fahrenheit') {
            f = temp;
            c = fahrenheitToCelsius(f);
            k = celsiusToKelvin(c);
            if(con=='Fahrenheit'){
                outt_value.value=`${f}`
            }
            if(con=='Kelvin'){
                outt_value.value=`${k.toFixed(2)}`
            }
            if(con=='Celsius'){
                outt_value.value=`${c.toFixed(2)}`
            }
        } else if (unit === 'Kelvin') {
            k = temp;
            c = kelvinToCelsius(k);
            f = celsiusToFahrenheit(c);
            if(con=='Fahrenheit'){
                outt_value.value=`${f.toFixed(2)}`
            }
            if(con=='Kelvin'){
                outt_value.value=`${k}`
            }
            if(con=='Celsius'){
                outt_value.value=`${c.toFixed(2)}`
            }
        }

        }else if(isNaN(temp)){
        
            outt_value.value=`${0}`;
            
            
        }
        
    
    }