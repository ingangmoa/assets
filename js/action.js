
const eduArr = [
	'educast', 
	'class101', 
	'milkt', 
	'kmooc', 
	'udemy', 
	'studypie', 
	'airklass', 
	'tacademy', 
	'edwith', 
	'boostcourse',
	'ebs'
];

var nonHtml = '<div class="col-lg-3 col-md-6 mb-4">\n' +
	'		<div class="card h-100 edukey_sub" data-linkid="">\n' +
	'			<div class="card-body"></div>\n' +
	'			<div class="card-footer"></div>\n' +
	'		</div>\n' +
	'	</div>';

$(function () {
	alertInitialze();
});
   
function alertInitialze() {
    var alertHtml = '<div class="modal fade" id="ATION-ALERT" role="dialog" tabindex="-1" aria-labelledby="ATION-ALERT-MODAL" aria-hidden="true" data-keyboard="false" data-backdrop="static">\n' +
        '        <div class="modal-dialog modal-dialog-centered">\n' +
        '            <div class="modal-content">\n' +
        '                <div class="modal-header">\n' +
        '                    <button type="button" class="close" data-dismiss="modal"><i class="pci-cross pci-circle"></i></button>\n' +
        '                    <h4 class="modal-title">ALERT</h4>\n' +
        '                </div>\n' +
        '                <div class="modal-body text-center">\n' +
        '                </div>\n' +
        '                <div class="modal-footer text-center">\n' +
        '                    <div class="text-center">\n' +
        '                        <button data-dismiss="modal" class="btn btn-default" type="button">닫기</button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';

	var ajaxHtml = '<div class="modal fade" id="AJAX-ALERT" role="dialog" tabindex="-1" aria-labelledby="AJAX-ALERT-MODAL" aria-hidden="true" data-keyboard="false" data-backdrop="static">\n' +
        '        <div class="modal-dialog modal-dialog-centered">\n' +
        '            <div class="modal-content">\n' +
        '                <div class="modal-header">\n' +
        '                    <button type="button" class="close" data-dismiss="modal"><i class="pci-cross pci-circle"></i></button>\n' +
        '                    <h4 class="modal-title">ALERT</h4>\n' +
        '                </div>\n' +
        '                <div class="modal-body text-center">\n' +
        '                </div>\n' +
        '                <div class="modal-footer text-center">\n' +
        '                    <div class="text-center">\n' +
        '                        <button data-dismiss="modal" class="btn btn-default" type="button">닫기</button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';

	var courseHtml = '<div class="modal fade" id="COURSE-ALERT" role="dialog" tabindex="-1" aria-labelledby="COURSE-ALERT-MODAL" aria-hidden="true" data-keyboard="false" data-backdrop="static">\n' +
        '        <div class="modal-dialog modal-dialog-centered">\n' +
        '            <div class="modal-content">\n' +
        '                <div class="modal-header">\n' +
        '                    <button type="button" class="close" data-dismiss="modal"><i class="pci-cross pci-circle"></i></button>\n' +
        '                    <h4 class="modal-title">ALERT</h4>\n' +
        '                </div>\n' +
        '                <div class="modal-body text-center">\n' +
        '                </div>\n' +
        '                <div class="modal-footer text-center">\n' +
        '                    <div class="text-center">\n' +
        '                        <button data-dismiss="modal" class="btn btn-default" type="button">닫기</button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';

	var teacherHtml = '<div class="modal fade" id="TEACHER-ALERT" role="dialog" tabindex="-1" aria-labelledby="TEACHER-ALERT-MODAL" aria-hidden="true" data-keyboard="false" data-backdrop="static">\n' +
        '        <div class="modal-dialog modal-dialog-centered">\n' +
        '            <div class="modal-content">\n' +
        '                <div class="modal-header">\n' +
        '                    <button type="button" class="close" data-dismiss="modal"><i class="pci-cross pci-circle"></i></button>\n' +
        '                    <h4 class="modal-title">ALERT</h4>\n' +
        '                </div>\n' +
        '                <div class="modal-body text-center">\n' +
        '                </div>\n' +
        '                <div class="modal-footer text-center">\n' +
        '                    <div class="text-center">\n' +
        '                        <button data-dismiss="modal" class="btn btn-default" type="button">닫기</button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';

	var openerHtml = '<div class="modal fade" id="OPENER-ALERT" role="dialog" tabindex="-1" aria-labelledby="OPENER-ALERT-MODAL" aria-hidden="true" data-keyboard="false" data-backdrop="static">\n' +
        '        <div class="modal-dialog modal-dialog-centered">\n' +
        '            <div class="modal-content">\n' +
        '                <div class="modal-header">\n' +
        '                    <button type="button" class="close" data-dismiss="modal"><i class="pci-cross pci-circle"></i></button>\n' +
        '                    <h4 class="modal-title">ALERT</h4>\n' +
        '                </div>\n' +
        '                <div class="modal-body text-center">\n' +
        '                </div>\n' +
        '                <div class="modal-footer text-center">\n' +
        '                    <div class="text-center">\n' +
        '                        <button data-dismiss="modal" class="btn btn-default" type="button">닫기</button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';
	
	var socketHtml = '<div class="modal fade" id="SOCKET-ALERT" role="dialog" tabindex="-1" aria-labelledby="SOCKET-ALERT-MODAL" aria-hidden="true" data-keyboard="false" data-backdrop="static">\n' +
        '        <div class="modal-dialog modal-dialog-centered">\n' +
        '            <div class="modal-content">\n' +
        '                <div class="modal-header">\n' +
        '                    <button type="button" class="close" data-dismiss="modal"><i class="pci-cross pci-circle"></i></button>\n' +
        '                    <h4 class="modal-title">ALERT</h4>\n' +
        '                </div>\n' +
        '                <div class="modal-body text-center">\n' +
        '                </div>\n' +
        '                <div class="modal-footer text-center">\n' +
        '                    <div class="text-center">\n' +
        '                        <button data-dismiss="modal" class="btn btn-default" type="button">닫기</button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';

	var reloadHtml = '<div class="modal fade" id="RELOAD-ALERT" role="dialog" tabindex="-1" aria-labelledby="RELOAD-ALERT-MODAL" aria-hidden="true" data-keyboard="false" data-backdrop="static">\n' +
        '        <div class="modal-dialog modal-dialog-centered">\n' +
        '            <div class="modal-content">\n' +
        '                <div class="modal-header">\n' +
        '                    <button type="button" class="close" data-dismiss="modal"><i class="pci-cross pci-circle"></i></button>\n' +
        '                    <h4 class="modal-title">ALERT</h4>\n' +
        '                </div>\n' +
        '                <div class="modal-body text-center">\n' +
        '                </div>\n' +
        '                <div class="modal-footer text-center">\n' +
        '                    <div class="text-center">\n' +
        '                        <button data-dismiss="modal" class="btn btn-default" type="button">닫기</button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';

	var popupHtml = '<div class="modal fade" id="POPUP-ALERT" role="dialog" tabindex="-1" aria-labelledby="POPUP-ALERT-MODAL" aria-hidden="true" data-keyboard="false" data-backdrop="static">\n' +
        '        <div class="modal-dialog modal-dialog-centered">\n' +
        '            <div class="modal-content">\n' +
        '                <div class="modal-header">\n' +
        '                    <button type="button" class="close" data-dismiss="modal"><i class="pci-cross pci-circle"></i></button>\n' +
        '                    <h4 class="modal-title">ALERT</h4>\n' +
        '                </div>\n' +
        '                <div class="modal-body text-center">\n' +
        '                </div>\n' +
        '                <div class="modal-footer text-center">\n' +
        '                    <div class="text-center">\n' +
        '                        <button data-dismiss="modal" class="btn btn-default" type="button">닫기</button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';

    var confirmHtml = '<div class="modal fade" id="ATION-CONFIRM" role="dialog" tabindex="-1" aria-labelledby="ATION-CONFIRM-MODAL" aria-hidden="true" data-keyboard="false" data-backdrop="static">\n' +
        '        <div class="modal-dialog modal-dialog-centered">\n' +
        '            <div class="modal-content">\n' +
        '                <div class="modal-header">\n' +
        '                    <button type="button" class="close" data-dismiss="modal"><i class="pci-cross pci-circle"></i></button>\n' +
        '                    <h4 class="modal-title">CONFIRM</h4>\n' +
        '                </div>\n' +
        '                <div class="modal-body text-center">\n' +
        '                </div>\n' +
        '                <div class="modal-footer text-center">\n' +
        '                    <div class="col-sm-12 text-center">\n' +
        '                        <button data-dismiss="modal" class="btn btn-primary w-40 BTN-ATION-CONFIRM-OK" type="button">확인</button>\n' +
        '                        <button data-dismiss="modal" class="btn btn-primary w-40" type="button">닫기</button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';

    var passwordConfirmHtml = '<div class="modal fade" id="ATION-PASSWORD-CONFIRM" role="dialog" tabindex="-1" aria-labelledby="ATION-PASSWORD-CONFIRM-MODAL" aria-hidden="true" data-keyboard="false" data-backdrop="static">\n' +
        '        <div class="modal-dialog">\n' +
        '            <div class="modal-content">\n' +
        '                <div class="modal-header">\n' +
        '                    <button type="button" class="close" data-dismiss="modal"><i class="pci-cross pci-circle"></i></button>\n' +
        '                    <h4 class="modal-title">PASSWORD CONFIRM</h4>\n' +
        '                </div>\n' +
        '                <div class="modal-body text-center">\n' +
        '                    <h4 class="text-danger mar-btm">PLEASE INSERT YOUR PASSWORD.</h4>\n' +
        '                    <div class="row">\n' +
        '                        <div class="col-sm-12">\n' +
        '                            <form id="FORM-USER-PASSWORD-CONFIRM" class="form-horizontal">\n' +
        '                                <div class="form-group">\n' +
        '                                    <div class="col-sm-12">\n' +
        '                                        <input type="password" placeholder="YOUR PASSWORD" class="form-control" id="USER_PASSWORD_CONFIRM" name="USER_PASSWORD" data-original-title="<Caps Lock>이 켜져 있습니다." data-trigger="manual" />\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </form>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="modal-footer text-center">\n' +
        '                    <div class="text-center">\n' +
        '                        <button class="btn btn-primary BTN-ATION-CONFIRM-OK" type="button">CONFIRM</button>\n' +
        '                        <button data-dismiss="modal" class="btn btn-default" type="button">CANCEL</button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';

    //$('body').append(alertHtml).append(confirmHtml).append(passwordConfirmHtml);
	$('body').append(alertHtml).append(confirmHtml).append(passwordConfirmHtml).append(socketHtml).append(reloadHtml).append(popupHtml).append(openerHtml).append(ajaxHtml).append(courseHtml).append(teacherHtml);
	alertHtml = null;
	confirmHtml = null;
	passwordConfirmHtml = null;
	socketHtml = null;
	reloadHtml = null;
	popupHtml = null;
	openerHtml = null;
	ajaxHtml = null;
	courseHtml = null;
	teacherHtml = null;
}


function ationAlert(requestData) {
    var alertModal = $('#ATION-ALERT');

    if (requestData !== undefined && requestData !== null && requestData.contents !== undefined && requestData.contents !== null) {
        if (requestData.title !== undefined && requestData.title !== null) {
            alertModal.find('.modal-title').text(requestData.title);
        } else {
            alertModal.find('.modal-title').text('');
        }

        alertModal.find('.modal-body').html(requestData.contents);

		alertModal.modal('show');

        alertModal.off('hidden.bs.modal');
        if (requestData.callback !== undefined && requestData.callback !== null) {
            alertModal.on('hidden.bs.modal', requestData.callback);
        }

        alertModal.off('shown.bs.modal').on('shown.bs.modal', function () {
            alertModal.find('button').focus();
        });
    }
}


function ajaxAlert(requestData) {
    var alertModal = $('#AJAX-ALERT');

    if (requestData !== undefined && requestData !== null && requestData.contents !== undefined && requestData.contents !== null) {
        if (requestData.title !== undefined && requestData.title !== null) {
            alertModal.find('.modal-title').text(requestData.title);
        } else {
            alertModal.find('.modal-title').text('');
        }

        alertModal.find('.modal-body').html(requestData.contents);

        alertModal.off('hidden.bs.modal');
        if (requestData.callback !== undefined && requestData.callback !== null) {
            alertModal.on('hidden.bs.modal', requestData.callback);
        }

        alertModal.modal('show');

        alertModal.off('shown.bs.modal').on('shown.bs.modal', function () {
            alertModal.find('button').focus();
        });
    }
}


function courseAlert(requestData) {
    var alertModal = $('#COURSE-ALERT');

    if (requestData !== undefined && requestData !== null && requestData.contents !== undefined && requestData.contents !== null) {
        if (requestData.title !== undefined && requestData.title !== null) {
            alertModal.find('.modal-title').text(requestData.title);
        } else {
            alertModal.find('.modal-title').text('');
        }

        alertModal.find('.modal-body').html(requestData.contents);

        alertModal.off('hidden.bs.modal');
        if (requestData.callback !== undefined && requestData.callback !== null) {
            alertModal.on('hidden.bs.modal', requestData.callback);
        }

        alertModal.modal('show');

        alertModal.off('shown.bs.modal').on('shown.bs.modal', function () {
            alertModal.find('button').focus();
        });
    }
}


function teacherAlert(requestData) {
    var alertModal = $('#TEACHER-ALERT');

    if (requestData !== undefined && requestData !== null && requestData.contents !== undefined && requestData.contents !== null) {
        if (requestData.title !== undefined && requestData.title !== null) {
            alertModal.find('.modal-title').text(requestData.title);
        } else {
            alertModal.find('.modal-title').text('');
        }

        alertModal.find('.modal-body').html(requestData.contents);

        alertModal.off('hidden.bs.modal');
        if (requestData.callback !== undefined && requestData.callback !== null) {
            alertModal.on('hidden.bs.modal', requestData.callback);
        }

        alertModal.modal('show');

        alertModal.off('shown.bs.modal').on('shown.bs.modal', function () {
            alertModal.find('button').focus();
        });
    }
}


function socketAlert(requestData) {
    var alertModal = $('#SOCKET-ALERT');

    if (requestData !== undefined && requestData !== null && requestData.contents !== undefined && requestData.contents !== null) {
        if (requestData.title !== undefined && requestData.title !== null) {
            alertModal.find('.modal-title').text(requestData.title);
        } else {
            alertModal.find('.modal-title').text('');
        }

        alertModal.find('.modal-body').html(requestData.contents);

        alertModal.off('hidden.bs.modal');
        if (requestData.callback !== undefined && requestData.callback !== null) {
            alertModal.on('hidden.bs.modal', requestData.callback);
        }

        alertModal.modal('show');

        alertModal.off('shown.bs.modal').on('shown.bs.modal', function () {
            alertModal.find('button').focus();
        });
    }
}


function reloadAlert(requestData) {
    var alertModal = $('#RELOAD-ALERT');

    if (requestData !== undefined && requestData !== null && requestData.contents !== undefined && requestData.contents !== null) {
        if (requestData.title !== undefined && requestData.title !== null) {
            alertModal.find('.modal-title').text(requestData.title);
        } else {
            alertModal.find('.modal-title').text('');
        }

        alertModal.find('.modal-body').html(requestData.contents);

        alertModal.off('hidden.bs.modal');
        if (requestData.callback !== undefined && requestData.callback !== null) {
            alertModal.on('hidden.bs.modal', requestData.callback);
        }

        alertModal.modal('show');

        alertModal.off('shown.bs.modal').on('shown.bs.modal', function () {
            alertModal.find('button').focus();
        });
    }
}


function openerAlert(requestData) {
    var alertModal = $('#OPENER-ALERT');

    if (requestData !== undefined && requestData !== null && requestData.contents !== undefined && requestData.contents !== null) {
        if (requestData.title !== undefined && requestData.title !== null) {
            alertModal.find('.modal-title').text(requestData.title);
        } else {
            alertModal.find('.modal-title').text('');
        }

        alertModal.find('.modal-body').html(requestData.contents);

        alertModal.off('hidden.bs.modal');
        if (requestData.callback !== undefined && requestData.callback !== null) {
            alertModal.on('hidden.bs.modal', requestData.callback);
        }

        alertModal.modal('show');

        alertModal.off('shown.bs.modal').on('shown.bs.modal', function () {
            alertModal.find('button').focus();
        });
    }
}


function popupAlert(requestData) {
    var alertModal = $('#POPUP-ALERT');

    if (requestData !== undefined && requestData !== null && requestData.contents !== undefined && requestData.contents !== null) {
        if (requestData.title !== undefined && requestData.title !== null) {
            alertModal.find('.modal-title').text(requestData.title);
        } else {
            alertModal.find('.modal-title').text('');
        }

        alertModal.find('.modal-body').html(requestData.contents);

        alertModal.off('hidden.bs.modal');
        if (requestData.callback !== undefined && requestData.callback !== null) {
            alertModal.on('hidden.bs.modal', requestData.callback);
        }

        alertModal.modal('show');

        alertModal.off('shown.bs.modal').on('shown.bs.modal', function () {
            alertModal.find('button').focus();
        });
    }
}


function ationConfirm(requestData) {
    var confirmModal = $('#ATION-CONFIRM');
    var buttonConfirm = confirmModal.find('.BTN-ATION-CONFIRM-OK');

    if (requestData !== undefined && requestData !== null && requestData.contents !== undefined && requestData.contents !== null) {
        if (requestData.title !== undefined && requestData.title !== null) {
            confirmModal.find('.modal-title').text(requestData.title);
        } else {
            confirmModal.find('.modal-title').text('');
        }

        confirmModal.find('.modal-body').html(requestData.contents);

        buttonConfirm.off('click');
        if (requestData.callback !== undefined && requestData.callback !== null) {
            buttonConfirm.click(requestData.callback);
        }

        confirmModal.modal('show');
    }
}


function requestJsonFullIndex_renewal(requestData) {
	console.log(requestData);
}



function requestJsonFullIndex(requestData) {
	var jsonKeys = JSON.parse(requestData);
	var edutHtml='', contentPrice=0, contentFree=0, contentTotal=0;
	if ( jsonKeys  != undefined ) {
		jsonKeys.forEach(function (response) {
			if ( response.SellingPrice === 0 || response.SellingPrice === '' ) {
				edutHtml += '<div class="col-lg-3 col-md-6 mb-4 edukey_free '+response.Name+'">';
				contentFree += 1;
			} else {
				edutHtml += '<div class="col-lg-3 col-md-6 mb-4 edukey_paid '+response.Name+'">';
				contentPrice += 1;
			}
			contentTotal = parseInt(contentPrice+contentFree);

			// favicon
			var favicon = '';
			switch(response.EducationId) {
				case 'educast' : favicon='//educast.com/favicon-16x16.png'; break;
				case 'class101' : favicon='//class101.net/images/favicon-16x16.png'; break;
				case 'milkt' : favicon='//mid.milkt.co.kr/img/icon/favicon_32x32.ico'; break;
				case 'kmooc' : favicon='//www.kmooc.kr/static/images/favicon.48298a133a52.ico'; break;
				case 'udemy' : favicon='//www.udemy.com/staticx/udemy/images/v6/favicon-16x16.png'; break;
				case 'studypie' : favicon='//s3.ap-northeast-2.amazonaws.com/studypie.infinity/static/img/favicon.ico'; break;
				case 'airklass' : favicon='//www.airklass.com/static/icon/favicon.07ab05dc8975.ico'; break;
				case 'tacademy' : favicon='//tacademy.skplanet.com/favicons/favicon.ico'; break;
				case 'edwith' : favicon='//ssl.pstatic.net/static/m/mooc/p/partner/next/favicon.ico'; break;
				case 'boostcourse' : favicon='//ssl.pstatic.net/static/m/mooc/p/partner/boostcrs/favicon.ico'; break;
				case 'ebs' : favicon='//primary.ebs.co.kr/images/favicon_primary.ico'; break;
				case 'elihigh' : favicon='http://img1.mbest.gscdn.com/main/banner/elihigh_favicon.ico'; break;
				case 'postech' : favicon='//d38o1uhu3ht2jn.cloudfront.net/wp-content/uploads/2019/09/26152927/logo_pro_postech.png'; break;
				case 'ingang' : favicon='//edu.ingang.go.kr/htmlRes/images/user/common/favicon.ico'; break;
				case 'mimacstudy' : favicon='//img.mimacstudy.com/FRONT/icon/favicon.ico'; break;
				case 'megastudy' : favicon='//img.megastudy.net/common/megastudy.ico'; break;
				default : favicon='/assets/app_icon.ico'; break;
			}

			edutHtml += '<div class="card h-100 edukey_sub" data-seq="'+response.Seq+'" data-typeid="'+response.EducationId+'" data-linkid="'+response.Key+'">';
				if ( response.Img ) {
					var imgUrl = response.Img.replace("https:","");
					imgUrl = imgUrl.replace("http:","");
					edutHtml += '<div style="position:absolute;top:160px;right:0px;"><img src="'+favicon+'" width="16" height="16" title="'+response.EducationId+'"></div>';
					edutHtml += '<img class="card-img-top showfilm" src="'+imgUrl+'" width="264" height="176" alt="'+response.EducationId+'">';
				}
				edutHtml += '<div class="card-body">';
					switch(response.EducationId) {
						case 'class101' : 
							edutHtml += '<p class="card-text"><span>'+response.Category2+'&nbsp;&nbsp;'+response.Name+'</span></p>';
							edutHtml += '<p class="card-text">'+response.Subject+'</p>';
							break;
						case 'studypie' : 
							edutHtml += '<p class="card-text"><span>'+response.Category1+'</span></p>';
							edutHtml += '<p class="card-text">'+response.Subject+'</p>';
							break;
						case 'milkt' : 
							edutHtml += '<p class="card-text"><span>'+response.Category1+'&nbsp;&nbsp;'+response.Name+'</span></p>';
							edutHtml += '<p class="card-text">'+response.Subject+'</p>';
							break;
						case 'boostcourse' : 
							edutHtml += '<p class="card-text">'+response.Subject+'</p>';
							edutHtml += '<p class="card-text"><span>'+response.Name+'&nbsp;&nbsp;'+response.partnerName+'</span></p>';
							//edutHtml += '<p class="card-text">'+response.RatingCount+'&nbsp;&nbsp;'+response.RatingValue+'&nbsp;&nbsp;'+response.ContentLevel+'</p>';
							break;
						case 'edwith' : 
							edutHtml += '<p class="card-text">'+response.Subject+'</p>';
							edutHtml += '<p class="card-text"><span>'+response.Name+'&nbsp;&nbsp;'+response.partnerName+'</span></p>';
							//edutHtml += '<p class="card-text">'+response.RatingCount+'&nbsp;&nbsp;'+response.RatingValue+'</p>';
							break;
						case 'mimacstudy' : 
							edutHtml += '<p class="card-text">'+response.Subject+'</p>';
							edutHtml += '<p class="card-text"><span>'+response.Name+'&nbsp;&nbsp;'+response.partnerName+'</span></p>';
							break;
						case 'megastudy' : 
							edutHtml += '<p class="card-text">'+response.Subject+'</p>';
							edutHtml += '<p class="card-text"><span>'+response.Name+'&nbsp;&nbsp;'+response.partnerName+'</span></p>';
							break;
						case 'kmooc' : 
							edutHtml += '<p class="card-text">'+response.Subject+'</p>';
							edutHtml += '<p class="card-text"><span>'+response.Name+'&nbsp;&nbsp;'+response.partnerName+'</span></p>';
							//edutHtml += '<p class="card-text"><span>'+response.Subtitle+'</span></p>';
							break;
						case 'ebs' : 
							edutHtml += '<p class="card-text">'+response.Subject+'</p>';
							edutHtml += '<p class="card-text"><span>'+response.Name+'</span></p>';
							break;
						case 'postech' : 
							edutHtml += '<p class="card-text">'+response.Subject+'</p>';
							edutHtml += '<p class="card-text"><span>'+response.Name+'</span></p>';
							break;
						case 'airklass' : 
							edutHtml += '<p class="card-text">'+response.Subject+'</p>';
							edutHtml += '<p class="card-text"><span>'+response.Name+'</span></p>';
							//edutHtml += '<p class="card-text"><span>'+response.RatingValue+'('+response.RatingCount+')</span></p>';
							break;
						case 'udemy' : 
							edutHtml += '<p class="card-text">'+response.Subject+'</p>';
							edutHtml += '<p class="card-text"><span>'+response.Name+'</span></p>';
							//edutHtml += '<p class="card-text"><span>'+response.RatingValue+'('+response.Wishlist+')</span></p>';
							break;
						case 'tacademy' : 
							edutHtml += '<p class="card-text">'+response.Subject+'</p>';
							break;
						default : 
							edutHtml += '<p class="card-text"><img src="'+response.Nameimg+'" width="20" height="20"><span>'+response.Name+'</span></p>';
							edutHtml += '<p class="card-text">'+response.Subject+'</p>';
							//edutHtml += '<p class="card-text">'+response.RatingCount+' | '+response.RatingValue+'</p>';
							break;

					}
					edutHtml += '</div>';
				edutHtml += '</div>';
			edutHtml += '</div>';
		});
	}

	$('#letsstudy').append(edutHtml);

	$('#contentPrice').text(contentPrice);
	$('#contentFree').text(contentFree);
	$('#contentTotal').text(contentTotal);

	// NULL
	if ( contentTotal === 0 ) {
		edutHtml = '';
		edutHtml += '<div class="col-lg-12 col-md-6 mb-4">';
			edutHtml += '<h1 class="mb-5">다른 검색어로 진행하여주세요.</h1>';
		edutHtml += '</div>';
		$('.letsstudyTitle').hide();
		$('#letsstudy').append(edutHtml);
	}
}


function requestJsonIndex(requestData, num) {
	var jsonKeys = JSON.parse(requestData);
	var edutHtml='', contentPrice=0, contentFree=0, contentTotal=0;
	eduArr.forEach(function (seq) {
		edutHtml='';
		if ( jsonKeys[seq]  != undefined ) {
			jsonKeys[seq].forEach(function (response) {
				if ( num === 0 ) {
					edutHtml += '<div class="col-lg-3 col-md-6 mb-4">';
				} else {
					if ( response.SellingPrice === 0 || response.SellingPrice === '' ) {
						edutHtml += '<div class="col-lg-3 col-md-6 mb-4 edukey_free '+response.Name+'">';
						contentFree += 1;
					} else {
						edutHtml += '<div class="col-lg-3 col-md-6 mb-4 edukey_paid '+response.Name+'">';
						contentPrice += 1;
					}
					contentTotal = parseInt(contentPrice+contentFree);
				}

				// favicon
				var favicon = '';
				switch(seq) {
					case 'educast' : favicon='//educast.com/favicon-16x16.png'; break;
					case 'class101' : favicon='//class101.net/images/favicon-16x16.png'; break;
					case 'milkt' : favicon='//mid.milkt.co.kr/img/icon/favicon_32x32.ico'; break;
					case 'kmooc' : favicon='//www.kmooc.kr/static/images/favicon.48298a133a52.ico'; break;
					case 'udemy' : favicon='//www.udemy.com/staticx/udemy/images/v6/favicon-16x16.png'; break;
					case 'studypie' : favicon='//s3.ap-northeast-2.amazonaws.com/studypie.infinity/static/img/favicon.ico'; break;
					case 'airklass' : favicon='//www.airklass.com/static/icon/favicon.07ab05dc8975.ico'; break;
					case 'tacademy' : favicon='//tacademy.skplanet.com/favicons/favicon.ico'; break;
					case 'edwith' : favicon='//ssl.pstatic.net/static/m/mooc/p/partner/next/favicon.ico'; break;
					case 'boostcourse' : favicon='//ssl.pstatic.net/static/m/mooc/p/partner/boostcrs/favicon.ico'; break;
					case 'ebs' : favicon='//primary.ebs.co.kr/images/favicon_primary.ico'; break;
					default : favicon='/assets/app_icon.ico'; break;
				}
				
					//edutHtml += '<a href="'+response.Url+'" target="_blank">';
						edutHtml += '<div class="card h-100 edukey_sub" data-typeid="'+seq+'" data-linkid="'+response.Key+'">';
							if ( response.Img ) {
								var imgUrl = response.Img.replace("https:","");
								imgUrl = imgUrl.replace("http:","");
								edutHtml += '<div style="position:absolute;top:160px;right:0px;"><img src="'+favicon+'" width="16" height="16" title="'+seq+'"></div>';
								edutHtml += '<img class="card-img-top showfilm" src="'+imgUrl+'" width="264" height="176" alt="'+seq+'">';
							}
							edutHtml += '<div class="card-body">';
								switch(seq) {
									case 'class101' : 
										edutHtml += '<p class="card-text"><span>'+response.Category2+'&nbsp;&nbsp;'+response.Name+'</span></p>';
										edutHtml += '<p class="card-text">'+response.Subject+'</p>';
										break;
									case 'studypie' : 
										edutHtml += '<p class="card-text"><span>'+response.Category1+'</span></p>';
										edutHtml += '<p class="card-text">'+response.Subject+'</p>';
										break;
									case 'milkt' : 
										edutHtml += '<p class="card-text"><span>'+response.Category1+'&nbsp;&nbsp;'+response.Name+'</span></p>';
										edutHtml += '<p class="card-text">'+response.Subject+'</p>';
										break;
									case 'boostcourse' : 
										edutHtml += '<p class="card-text">'+response.Subject+'</p>';
										edutHtml += '<p class="card-text"><span>'+response.Name+'&nbsp;&nbsp;'+response.partnerName+'</span></p>';
										//edutHtml += '<p class="card-text">'+response.RatingCount+'&nbsp;&nbsp;'+response.RatingValue+'&nbsp;&nbsp;'+response.ContentLevel+'</p>';
										break;
									case 'edwith' : 
										edutHtml += '<p class="card-text">'+response.Subject+'</p>';
										edutHtml += '<p class="card-text"><span>'+response.Name+'&nbsp;&nbsp;'+response.partnerName+'</span></p>';
										//edutHtml += '<p class="card-text">'+response.RatingCount+'&nbsp;&nbsp;'+response.RatingValue+'</p>';
										break;
									case 'kmooc' : 
										edutHtml += '<p class="card-text">'+response.Subject+'</p>';
										edutHtml += '<p class="card-text"><span>'+response.Name+'&nbsp;&nbsp;'+response.partnerName+'</span></p>';
										//edutHtml += '<p class="card-text"><span>'+response.Subtitle+'</span></p>';
										break;
									case 'ebs' : 
										edutHtml += '<p class="card-text">'+response.Subject+'</p>';
										edutHtml += '<p class="card-text"><span>'+response.Name+'</span></p>';
										break;
									case 'airklass' : 
										edutHtml += '<p class="card-text">'+response.Subject+'</p>';
										edutHtml += '<p class="card-text"><span>'+response.Name+'</span></p>';
										//edutHtml += '<p class="card-text"><span>'+response.RatingValue+'('+response.RatingCount+')</span></p>';
										break;
									case 'udemy' : 
										edutHtml += '<p class="card-text">'+response.Subject+'</p>';
										edutHtml += '<p class="card-text"><span>'+response.Name+'</span></p>';
										//edutHtml += '<p class="card-text"><span>'+response.RatingValue+'('+response.Wishlist+')</span></p>';
										break;
									case 'tacademy' : 
										edutHtml += '';
										break;
									default : 
										edutHtml += '<p class="card-text"><img src="'+response.Nameimg+'" width="20" height="20"><span>'+response.Name+'</span></p>';
										edutHtml += '<p class="card-text">'+response.Subject+'</p>';
										//edutHtml += '<p class="card-text">'+response.RatingCount+' | '+response.RatingValue+'</p>';
										break;

								}
							edutHtml += '</div>';
							/*
							edutHtml += '<div class="card-footer">';
								var time='', price=0;
								switch(seq) {
									case 'kmooc' : 
										edutHtml += '';
										break;
									case 'airklass' : 
										time = response.ContentTime+'일';
										if ( response.ContentTime < 1 ) {
											time = '평생';
										}
										
										price = response.SellingPrice;
										if ( response.SellingPrice < 1 ) {
											price = '무료';
										}
										edutHtml += '<span>'+time+'&nbsp;&nbsp;'+price+'</span>';
										break;
									case 'tacademy' : 
										edutHtml += '';
										break;
									case 'ebs' : 
										edutHtml += '';
										break;
									case 'udemy' : 
										price = response.SellingPrice;
										if ( response.SellingPrice < 1 ) {
											price = 'FREE';
										}
										edutHtml += '<span>'+price+'</span>';

										if ( response.Bestseller == 1 ) {
											edutHtml += '<p class="card-text">베스트셀러</p>';
										}
										break;
									default : 
										price = response.SellingPrice;
										if ( response.SellingPrice < 1 ) {
											price = 'FREE';
										}
										edutHtml += '<span>'+price+'</span>';
										break;
								}
							edutHtml += '</div>';
							*/
						edutHtml += '</div>';
					//edutHtml += '</a>';
				edutHtml += '</div>';
			});

			$('#'+seq).empty();
			if ( num === 0 ) {
				$('#'+seq).append(edutHtml);
			} else {
				$('#letsstudy').append(edutHtml);
			}

		} else {
			$('#'+seq).empty();
		}
	});

	if ( num === 1 ) {
		$('#contentPrice').text(contentPrice);
		$('#contentFree').text(contentFree);
		$('#contentTotal').text(contentTotal);

		// NULL
		if ( contentTotal === 0 ) {
			edutHtml = '';
			edutHtml += '<div class="col-lg-3 col-md-6 mb-4">';
				edutHtml += '<p class="card-text">NO DATA.</p>';
			edutHtml += '</div>';
			$('#letsstudy').append(edutHtml);
		}
	}
}




function requestJsonSearch(requestData) {
}