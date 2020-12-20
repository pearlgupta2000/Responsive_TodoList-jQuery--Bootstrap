
let inTask=$('#inTask')
let ulTask=$('#ulTask')
let add=$('#add')
let reset=$('#reset')
let sort=$('#sort')
let cleanup=$('#cleanup')
let inTaskDes=$('#inTaskDes')

function date(){
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 

    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = dd+'/'+mm+'/'+yyyy;
    return today
}

function addItem(){
    let a=$(`<a>`,{
        'href':'#',
        'class':'list-group-item list-group-item-action list-group-item-success'
    })
    let item=$(`<div>`,{
        'class':'d-flex w-100 justify-content-between'
    })
    let heading_=$(`<h4>`,{
        'class':'mb-1',
        text:inTask.val()
    })
    let date_=$(`<small>`,{
        text:date()
    })
    let para=$(`<p>`,{
        'class':'mb-1',
        text:inTaskDes.val()
    })
    a.click((ev)=>{
        $(ev.currentTarget).toggleClass('done')
    }) 
    item.append(heading_)
    item.append(date_)
    a.append(item)
    a.append(para)
    ulTask.append(a)
    inTask.val('')
    inTaskDes.val('')
    ToggleButton()
}

function clearDone(){
    $('#ulTask .done').remove();
    ToggleButton()
}

function Sortlist(){
    $('#ulTask .done').appendTo(ulTask)
}

function ToggleButton(){
    if(inTask.val()!=''){
        reset.prop('disabled',false)
    }
    else if(inTaskDes.val()!=''){
        reset.prop('disabled',false)
    }
    else {
        reset.prop('disabled',true)
    }
    add.prop('disabled',inTask.val()=='')
    sort.prop('disabled',ulTask.children().length<1)
    cleanup.prop('disabled',ulTask.children().length<1)
}
inTask.on('input',ToggleButton)
inTaskDes.on('input',ToggleButton)

inTask.keypress((e)=>{
   if(e.which==13) addItem()
})

inTaskDes.keypress((e)=>{
    if(inTask.val()!=''){
    if(e.which==13) addItem()
    }
 })

add.click(addItem)
reset.click(()=>{
    inTask.val('')
    inTaskDes.val('')
    ToggleButton()
})
cleanup.click(clearDone)
sort.click(Sortlist)
