let waitForFullPage2 = function (callback) {
  if (document.getElementsByClassName('progress-bar')[0].style.width === '' &&
    document.getElementById("text-compiling").style.right !== '') {
    callback();
  } else {
    setTimeout(function () {
      waitForFullPage(callback);
    }, 100);
  }
};

let waitForFullPage = function (callback) {

  setTimeout(callback, 2000);

};

let simplifyFunc = function () {
  // ===================== left file tree ===================
  // trigger left file bar [after above script]
  $('#ide-body').css('top', '0px');
  $('div').each((p, q) => q.style.height = parseInt(q.style.height) > 500 ? '100vh' : q.style.height);
  $("[class='editor-sidebar full-size ui-layout-container']").css({
    'border-radius': '1em', 'box-shadow': '1px 1px 8px 2px #a9a9a9',
    // 'background-color': '#ededede6',
    'top': '.6em', 'bottom': '.6em', 'left': '0'
  });
  // sub-element: top bar in left-menu
  // hide original arrow symbol

  $("[class='custom-toggler custom-toggler-west ng-scope custom-toggler-closed']").css('display', 'none');
  // add a new button
  if ($("#float-trigger").length == 0)
    $("<div id='float-trigger'><i class='fas fa-angle-double-right'></i></div>").insertAfter($("[class='ui-layout-resizer ui-layout-resizer-west ui-draggable-handle ui-layout-resizer-closed ui-layout-resizer-west-closed ui-draggable-disabled']")[0]);
  let floatTrigger = $("#float-trigger");
  floatTrigger.css({
    'width': '22px', 'height': '40px', 'position': 'absolute', 'top': '50%', 'transform': 'translateY(-20px)',
    'color': '#138a15d9',
    'cursor': 'pointer', 'line-height': '40px', 'left': '.5em',
    'text-shadow': '1px 1px #ffffff70'
  })
  floatTrigger.children().css({ 'font-family': 'FontAwesome', 'font-style': 'normal', 'font-size': '3em' })
  floatTrigger.mouseover(function () {
    let fileBar = $("[class='ui-layout-west ui-layout-pane ui-layout-pane-west']");
    fileBar.css({ 'z-index': '100', 'display': 'flex' });
    $(document).mousemove(function (event) {
      if (event.pageX > fileBar.width()) { fileBar.css('display', 'none') }
    });
  });
  //top navbar
  let topNav = $("[class='toolbar toolbar-header toolbar-with-labels']");
  topNav.css('display', 'none');
  if ($("#top-float-trigger").length == 0)
    $("<div id='top-float-trigger'><i class='fas fa-angle-double-down'></i></div>").insertAfter($(".editor.full-size.ng-scope")[0]);
  let topfloatTrigger = $("#top-float-trigger");
  topfloatTrigger.css({
    'width': '22px', 'height': '40px', 'position': 'absolute', 'left': '50%', 'transform': 'translateX(-20px)',
    'color': '#138a15d9',
    'cursor': 'pointer', 'line-height': '40px', 'top': '.5em',
    'text-shadow': '1px 1px #ffffff70',
    'z-index': '99'
  })
  topfloatTrigger.children().css({ 'font-family': 'FontAwesome', 'font-style': 'normal', 'font-size': '3em' })
  showf = function () {

    topNav.css({ 'z-index': '100', 'display': 'flex' });
    $(document).mousemove(function (event) {
      if (event.pageY > topNav.height()) { topNav.css('display', 'none') }
    });
  };

  topfloatTrigger.mouseover(showf);
  topfloatTrigger.click(showf);
  // ==================== left navigation bar =====================
  // define elements in left nav bar
  let leftSubNav = $("[class='toolbar toolbar-editor ng-scope']");
  //
  leftSubNav.css({
    'height': '2.5em',
    'position': 'absolute',
    'margin': '3px 0 0 .3em',
    'padding': '0 1.5em 0 .6em',
    // 'background-color': '#f1f1f1e6',
    'box-shadow': 'rgb(161 161 161) 1px 1px 6px 2px',
    'border-radius': '2em',
  });
  leftSubNav.css('display', 'none');
  // first button
  $("[class='toggle-switch']").css('box-shadow', 'rgb(161 161 161) 0 0 6px 0')
  // add clickable button
  $("[class='toolbar-header-back-projects']").parent().append("<a id='nav-left-trigger' role='button' class='btn btn-full-height' style='cursor: pointer; font-size: 16px; border-left: 1px solid #e4e8ee'><i class='fa fa-fw fa-level-down'></i></a>");
  // ==> click to display
  $("#nav-left-trigger").click(() => {
    leftSubNav.toggle();
  });

  // ===================== major area =======================
  // center vertial line
  // header
  $("[class='pdf-viewer ng-scope']").css({ 'transform': 'translate(-.5em, 0)', 'top': '0' });

  // edit area
  $("[class='ui-layout-center ng-scope ui-layout-pane ui-layout-pane-center rp-state-current-file rp-state-current-file-mini']").css('background-color', '#e4e55e7');
  function changeEditArea() {
    // $("[class='ace_gutter']").css('left', '-28px');
    // $("[class='ace_scroller']").css('left', '40px');
  }
  // new ResizeSensor($("[class='ace_content']"), function () {
  //   changeEditArea();
  // });
  // left editor below nav bar
  $("[class='ng-scope ng-isolate-scope']").css('top', '0px');


  // ===========================editor row 

  // =================== right navigation bar ===========================
  //

  $('.pdf.full-size > div').each((p, q) => $(q).css('top', '0px'));

  let rightToolBar = $(".toolbar").filter(".toolbar-pdf");
  rightToolBar.css('opacity', '0');
  // add one clickable button
  if ($('#nav-right-trigger').length == 0)
    $("<a id='nav-right-trigger' role='button' class='btn btn-full-height' style='cursor:pointer;'><i id='right-dropdown' class='fas fa-chevron-circle-down'></i></a>").insertAfter(".online-users");

  $("#right-dropdown").css({ 'font-family': 'FontAwesome', 'font-style': 'normal' })
  // click to display

  // remove origianl zoom btns
  //   $(".pdfjs-controls").css({'left': '16px', 'top': '46px'});

  function clickRightBtn() {

    rightToolBar.css({
      'height': '36px',
      'position': 'absolute',
      'margin': '3px 0 0 16px',
      'padding': '0 1.5em 0 0',
      // 'background-color': '#f1f1e6',
      'box-shadow': 'rgb(161 161 161) 1px 1px 6px 2px',
      'border-radius': '2em',
      'z-index': '1000',
    });
    // first button group [re-complie]
    $('.btn-group').filter('.btn-recompile-group').css({
      'border-radius': '1000px', 'top': '15%', 'height': '70%', 'margin': '0 .4em'
    });
    // button icon
    let firstBtn = $("[class='btn btn-recompile']");
    firstBtn.css({ 'padding': '0 1em' });
    firstBtn.find("span").remove();  // remove span text
    // dropdown
    $("[class='btn btn-recompile dropdown-toggle']").css({ 'padding': '0 .5em' });
    // second button
    $('.log-btn').css('margin-left', '.5em');
    // third button
    $(".ng-scope").css('margin-lrft', '1em');
    // last button
    $('.toolbar-right').css('margin-left', '1em');
    leftSubNav.toggle();
    // rightToolBar.toggle();
    if (rightToolBar.css('opacity') === '0') {
      $("#right-dropdown").attr('class', 'fas fa-chevron-circle-up');
      rightToolBar.css('opacity', '1');
    } else {
      rightToolBar.css('opacity', '0');
      $("#right-dropdown").attr('class', 'fas fa-chevron-circle-down');
    }
  }
  $("#nav-right-trigger").click(clickRightBtn);
  clickRightBtn();
  if ($('#nav-right-trigger2').length == 0)
    $("<a id='nav-right-trigger2' role='button' class='btn btn-full-height' style='cursor:pointer;'><i id='right-dropdown2' class='fa fa-chevron-circle-up'></i></a>").insertBefore(".btn-recompile-group");
  $("#nav-right-trigger2").click(clickRightBtn);
  // ================== compile icon ======================
  //
  // add a icon
  // ==> detect if errors exist
  // error subpage
  function errorPage() {
    let start = new Date().getTime();
    let checkExist = setInterval(function () {
      if ($(".log-btn").find('span').attr('class').includes('label-danger')) {
        if (rightToolBar.css('opacity') === '0') { clickRightBtn() }
        $("[class='first-error-popup']").css({ 'border-radius': '16px', 'top': '65px', 'right': '', 'left': '18px', 'background-color': '#c9453e38', 'max-width': '425px' });
        $("[class='log-entry log-entry-first-error-popup']").css('border-radius', '16px');
        $("[class='log-entry-content']").css({ 'background-color': '#f1f1f1e6' });
        clearInterval(checkExist);
      } else if (new Date().getTime() - start > 5000) { clearInterval(checkExist); }
    }, 50);
  }
  // add spin
  if ($("#sync-icon").length == 0)
    $("<div id='sync-icon'> <i class='fa fa-refresh fa-spin'></i> </div>").insertAfter($("[class='toolbar toolbar-pdf']"));
  let syncIcon = $("#sync-icon");
  syncIcon.css({
    'position': 'absolute', 'font-size': '26px', 'right': '40px', 'top': '10px',
    'width': '50px', 'height': '50px', 'text-align': 'center', 'border-radius': '100px', 'line-height': '50px',
    'color': '#23b725', 'background-color': '#b5b5b587',
    'z-index': '1', 'opacity': '0'
  });
  //
  let compileIcon = $("[class='btn btn-recompile']");
  function callback(mutationsList, observer) {
    mutationsList.forEach(mutation => {
      if (mutation.attributeName === 'class') {
        if (compileIcon.children().attr('class') === 'fa fa-refresh fa-spin') { syncIcon.css({ 'z-index': '1000', 'opacity': '1' }) }
        else { syncIcon.css({ 'z-index': '1', 'opacity': '0' }); }
      }
    })
  }
  const mutationObserver = new MutationObserver(callback);
  // add observer
  mutationObserver.observe(document.getElementsByClassName('btn btn-recompile')[0].children[0], { attributes: true })

  // last: check error
  if ($(".log-btn").find('span').attr('class')?.includes('label-danger')) {
    clickRightBtn();
    // errorPage();
  }
}  // enf of simplifyFunc


// folder bar
function mainFunc() {
  // mimic click to hide left file bar
  document.querySelectorAll('a[ng-click="handleClick()"]')[1].click();



  // check current url
  let currenURL = window.location.origin;
  if (currenURL === 'https://www.overleaf.com') {
  } else {
    alert(currenURL + ' is not an overleaf web!');
    return;
  }

  // ================= check status =====================
  // ==> check if loaded before
  if ($("#nav-left-trigger").length === 1) { return }

  // ================= check full page is loaded? ====================
  // ==> call simplifyFunc if full page is loaded
  // $('.entity-name').click(function () {
  //   // setTimeout(mainFunc, 2000);
  //   waitForFullPage(() => { simplifyFunc() })
  // });

  simplifyFunc();

}  // end of mainFunc
console.log('autorun');
$(document).ready(() => {
  setTimeout(mainFunc, 2000);
});

// mainFunc();

// chrome.tabs.executeScript({ code: `(${mainFunc})()` });