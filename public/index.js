"use strict";function SendMail(e){e.preventDefault();var t=e.target,e=new FormData(t);e.get("mailer")&&e.get("receiver")&&e.get("text")&&fetch("/api/mail",{method:"POST",body:e}).then(function(e){if(!e||!e.ok)throw Error("Ошибка при оправке сообщения");t.reset(),ShowAlert(!0,"Сообщение отправлено")}).catch(function(e){return ShowAlert(!1,e)})}function ShowAlert(e,t){var a=document.createElement("div");a.innerHTML='<div class="alert alert-'.concat(e?"success":"danger",' alert-dismissible fade show m-1" role="alert">\n      ').concat(t,'\n      <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n        <span aria-hidden="true">&times;</span>\n      </button>\n    </div>'),document.body.before(a)}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNlbmRNYWlsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJkYXRhIiwiZ2V0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwidGhlbiIsInJlcyIsInJlc2V0Iiwib2siLCJFcnJvciIsIlNob3dBbGVydCIsImUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkaXYiLCJpbm5lckhUTUwiLCJzdGF0dXMiLCJtZXNzYWdlIiwiYmVmb3JlIl0sIm1hcHBpbmdzIjoiYUFBQSxTQUFTQSxTQUFTQyxHQUNoQkEsRUFBTUMsaUJBRFIsSUFBQUMsRUFBU0gsRUFBU0MsT0FDaEJBLEVBQU1DLElBQUFBLFNBQU5DLEdBRUlDLEVBQUlDLElBQUcsV0FBQUQsRUFBWEMsSUFBQSxhQUFBRCxFQUFBQyxJQUFBLFNBSUFDLE1BQU0sWUFBYSxDQUNqQkMsT0FBUSxPQUNSQyxLQUFNSixJQUdKSyxLQUFLQyxTQUFBQSxHQUNMUCxJQUFLUSxJQUFMRCxFQUFBRSxHQUFBLE1BQUFDLE1BQUEsZ0NBQ0FDLEVBQUFBLFFBUEpBLFdBU1MsRUFBQSwwQkFUVFIsTUFBQSxTQUFBUyxHQUFBLE9BQUFELFdBQUEsRUFBQUMsS0FjQSxTQUFPRCxVQUFHRSxFQUFTQyxHQUNuQkMsSUFBSUMsRUFBQUEsU0FBSkYsY0FBQSxPQU9BRCxFQUFBQSxVQUFBQSwyQkFBQUEsT0FDREksRUFBQSxVQUFBLFNBRENKLDJEQUFBQSxPQUxNSyxFQUtOTCxzS0FBQUEsU0FBU1IsS0FBS2MsT0FBT0oiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBTZW5kTWFpbChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IGZvcm0gPSBldmVudC50YXJnZXQ7XHJcbiAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG4gIGlmICghZGF0YS5nZXQoJ21haWxlcicpIHx8ICFkYXRhLmdldCgncmVjZWl2ZXInKSB8fCAhZGF0YS5nZXQoJ3RleHQnKSkgcmV0dXJuO1xyXG5cclxuICBmZXRjaCgnL2FwaS9tYWlsJywge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBib2R5OiBkYXRhXHJcbiAgfSlcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGlmICghcmVzIHx8ICFyZXMub2spIHRocm93IEVycm9yKCfQntGI0LjQsdC60LAg0L/RgNC4INC+0L/RgNCw0LLQutC1INGB0L7QvtCx0YnQtdC90LjRjycpO1xyXG4gICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgIFNob3dBbGVydCh0cnVlLCAn0KHQvtC+0LHRidC10L3QuNC1INC+0YLQv9GA0LDQstC70LXQvdC+Jyk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGUgPT4gU2hvd0FsZXJ0KGZhbHNlLCBlKSk7XHJcbn1cclxuXHJcbi8vIFxyXG5mdW5jdGlvbiBTaG93QWxlcnQoc3RhdHVzLCBtZXNzYWdlKSB7XHJcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5pbm5lckhUTUwgPSBcclxuICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtJHtzdGF0dXMgPyAnc3VjY2VzcycgOiAnZGFuZ2VyJ30gYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93IG0tMVwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAke21lc3NhZ2V9XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+YDtcclxuICBkb2N1bWVudC5ib2R5LmJlZm9yZShkaXYpO1xyXG59Il19
