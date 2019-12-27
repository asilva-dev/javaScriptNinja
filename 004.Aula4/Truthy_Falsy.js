/*
Falsy: 
undefined 0
null  -0
NaN - '' ou ""
*/
if('0'){ teste = true;} else { teste = false;}
true
if ('amanda'){ teste = true; } else {teste = false;}
true
if ({}){ teste = true; } else {teste = false;}
true
if ([]){ teste = true; } else {teste = false;}
true
if (2){ teste = true; } else {teste = false;}
true


if (undefined){ teste = true; } else {teste = false;}
false
if (null){ teste = true; } else {teste = false;}
false
if (NaN){ teste = true; } else {teste = false;}
false
if (-0){ teste = true; } else {teste = false;}
false
if (false){ teste = true; } else {teste = false;}
false

//descobrindo a representaçãõ Booleana
!true
false

!1
false

1
1

!!true
true

!!1
true

!!0
false

!!""
false

!!NaN
false

!!false
false