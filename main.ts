function show5ADC () {
    read5ADC()
    basic.showNumber(L2)
    basic.pause(1000 )
    basic.showNumber(L1)
    basic.pause(1000 )
    basic.showNumber(C)
    basic.pause(1000 )
    basic.showNumber(R1)
    basic.pause(1000 )
    basic.showNumber(R2)
}
function read5ADC () {
    L2 = iBIT.ReadADC(ibitReadADC.ADC0)
    L1 = iBIT.ReadADC(ibitReadADC.ADC1)
    C = iBIT.ReadADC(ibitReadADC.ADC2)
    R1 = iBIT.ReadADC(ibitReadADC.ADC3)
    R2 = iBIT.ReadADC(ibitReadADC.ADC4)
}
let R2 = 0
let R1 = 0
let C = 0
let L1 = 0
let L2 = 0
let Base_speed = 60
let Base_left_speed = Base_speed - 0
let Base_Right_speed = Base_speed - 0
let Turn_speed = Base_speed
let JC_Delay_Time = 50
let Ref_L2 = 1500
let Ref_L1 = 50
let Ref_C = 50
let Ref_R1 = 50
let Ref_R2 = 50
basic.showIcon(IconNames.Heart)
while (!(input.buttonIsPressed(Button.A))) {
    if (input.buttonIsPressed(Button.B)) {
        show5ADC()
    }
}
basic.showIcon(IconNames.Diamond)
basic.forever(function () {
	
})
