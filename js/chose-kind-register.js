$(function(){
   
   


   $(".divmid-login").animate({"marginTop":"50px"},1000,function(){
   });
   $(".divmid").animate({"marginTop":"50px"},1000,function(){
   });
   $(".btn").animate({"marginLeft":"30%"},1500,function(){
           
   });
   /*btn back*/
   $(".bt-back").click(function(){
      window.history.back();
   });
   $(".bt-back-kind").click(function(){
      $(".chose-kind-register").hide(1000);
      $(".divmid-login").show(1000)
   });
   $(".bt-back-regist").click(function(){
      $(".divmid").hide(1000);
      $(".chose-kind").show(1000);
   })
   /* regist */
   $(".bt-sign-up").click(function(){
      $(".divmid-login").hide(1000);
      $(".chose-kind-register").show(1000);
      
   });

   /* chose kind register */
   $(".doctor-regist").click(function(){
      $(".chose-kind").hide(1000);
      $(".divmid").show(1000);
      $(".clinic-address").show();
   });
   
   $(".user-regist").click(function(){
      $(".chose-kind").hide(1000);
      $(".divmid").show(1000);
      
   });

   $(".slec").change(function(){
        if($(this).val()=="Doctor"){
           $(".hide").show(1000); 
        }else{
            $(".hide").hide(1000); 
        }
   }); 
    
});