export function makePreCode() {
  'ngInject';

  let directive = {
    restrict: 'AE',
    scope: {},
    link: function(scope, el, attr) {
      var htmlStr = el.find('textarea').val(),
        commentsArr,
        patternArr,
        strArr;

      if (attr.makePreCode === 'html') {
        htmlStr = htmlStr.replace(/\s*<(\/)?style>\s*/g, '');
        el.html(makeHtmlPreCode());
      } else if (attr.makePreCode === 'js') {
        htmlStr = htmlStr.replace(/(.+)\s*$/, '$1');
        el.html(makeJsPreCode());
      }

      function makeHtmlPreCode() {
        var tempStr = setCommentsPlaceholder(htmlStr, 'html')
          .replace(/<(\/*|!)([a-z]+)(\/*>*)/g, '&lt;$1●$2●$3')
          .replace(/(\s+)([a-z-]+)\s*=/g, '$1■$2■=')
          .replace(/=\s*(".+")/g, '=♠$1♠');

        tempStr = recoverComments(tempStr, 'html');

        return setColorCode(tempStr);
      }

      function makeJsPreCode() {
        var tempStr = setCommentsPlaceholder(htmlStr, 'js')
          .replace(/(console)(\.)(log)/g, '▲$1▲●$2●▲$3▲')
          .replace(/([^'][a-z]+)(\.)/g, '$1●$2●')
          .replace(/([:=]\s*)(true|false)/g, '$1▲$2▲')
          .replace(/(\w*)(\s*)(:)/g, '$1$2▲$3▲')
          .replace(/(\w*\s*)(=+) /g, '$1●$2● ')
          .replace(/(return|import|export default)\s/g, '●$1● ')
          .replace(/(function) ([^\(]+)\(/g, '▲$1▲ ■$2■(')
          .replace(/(class)\s([^\(]+) {/g, '▲$1▲ ■$2■ {')
          .replace(/([a-zA-Z$]+)(\) {|\) =|,\s)/g, '♥$1♥$2')
          .replace(/([^'\s]*)(var|let|=>)/g, '$1▲$2▲');

        tempStr = recoverComments(tempStr, 'js');

        return setColorCode(tempStr);
      }

      function setCommentsPlaceholder(str, type) {
        if (type === 'js') {
          commentsArr = str.match(/\/\/.+/g);
          str = str.replace(/\/\/.+/g, '※※');

          patternArr = str.match(/\/[^*][^\/\s]+\//g);
          str = str.replace(/\/[^*][^\/\s]+\//g, '㊣㊣');

          strArr = str.match(/'[^']*'/g);
          str = str.replace(/'[^']*'/g, 'ΨΨ');
        } else {
          commentsArr = str.match(/<!--.+/g);
          str = str.replace(/<!--.+/g, '※※');
        }

        return str;
      }

      function recoverComments(str) {
        if (commentsArr) {
          for (var i = 0, iLen = commentsArr.length; i < iLen; i++) {
            var comments = commentsArr[i].replace(/^</, '&lt;');

            str = str.replace(/※※/, '♦' + comments + '♦');
          }
        }

        if (patternArr) {
          for (var j = 0, jLen = patternArr.length; j < jLen; j++) {
            var pattern = patternArr[j].replace(/(\/)([^\/\s]+)(\/)/g, '♠$1♠●$2●♠$3♠');

            str = str.replace(/㊣㊣/, pattern);
          }
        }

        if (strArr) {
          for (var k = 0, kLen = strArr.length; k < kLen; k++) {
            var string = strArr[k].replace(/</, '&lt;');

            str = str.replace(/ΨΨ/, '♠' + string + '♠');
          }
        }

        return str;
      }

      function setColorCode(str) {
        return str
          .replace(/♦([^♦]+)♦/g, '<b class="gy">$1</b>')
          .replace(/●([^●]+)●/g, '<b class="rd">$1</b>')
          .replace(/■([^■]+)■/g, '<b class="og">$1</b>')
          .replace(/♠([^♠]+)♠/g, '<b class="yl">$1</b>')
          .replace(/▼([^▼]+)▼/g, '<b class="db">$1</b>')
          .replace(/♥([^♥]+)♥/g, '<b class="br">$1</b>')
          .replace(/▲([^▲]+)▲/g, '<b class="bl">$1</b>');
      }
    }
  };

  return directive;
}