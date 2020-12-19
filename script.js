
let inTask=$('#inTask')
let ulTask=$('#ulTask')
let add=$('#add')
let reset=$('#reset')
let sort=$('#sort')
let cleanup=$('#cleanup')

function addItem(){
    let item=$(`<li>`,{
        'class':'list-group-item',
        text:inTask.val()
    })

    item.click((ev)=>{
        $(ev.currentTarget).toggleClass('done')
    }) 
    ulTask.append(item)
    inTask.val('')
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
    reset.prop('disabled',inTask.val()=='')
    add.prop('disabled',inTask.val()=='')
    sort.prop('disabled',ulTask.children().length<1)
    cleanup.prop('disabled',ulTask.children().length<1)
}
inTask.on('input',ToggleButton)

inTask.keypress((e)=>{
   if(e.which==13) addItem()
})

add.click(addItem)
reset.click(()=>{
    inTask.val('')
    ToggleButton()
})
cleanup.click(clearDone)
sort.click(Sortlist)