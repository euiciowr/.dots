'use babel';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var SnippetParser = (function () {
  function SnippetParser() {
    _classCallCheck(this, SnippetParser);
  }

  _createClass(SnippetParser, [{
    key: 'reset',
    value: function reset() {
      this.inSnippet = false;
      this.inSnippetBody = false;
      this.snippetStart = -1;
      this.snippetEnd = -1;
      this.bodyStart = -1;
      this.bodyEnd = -1;
      this.escapedBraceIndices = null;
    }
  }, {
    key: 'findSnippets',
    value: function findSnippets(text) {
      if (text.length <= 0 || text.indexOf('$') === -1) {
        return;
      } // No snippets
      this.reset();
      var snippets = [];

      // We're not using a regex because escaped right braces cannot be tracked without lookbehind,
      // which doesn't exist yet for javascript; consequently we need to iterate through each character.
      // This might feel ugly, but it's necessary.
      for (var index = 0; index < text.length; index++) {
        if (this.inSnippet && this.snippetEnd === index) {
          var body = text.slice(this.bodyStart, this.bodyEnd + 1);
          body = this.removeBraceEscaping(body, this.bodyStart, this.escapedBraceIndices);
          snippets.push({ snippetStart: this.snippetStart, snippetEnd: this.snippetEnd, bodyStart: this.bodyStart, bodyEnd: this.bodyEnd, body: body });
          this.reset();
          continue;
        }

        if (this.inSnippet && index >= this.bodyStart && index <= this.bodyEnd) {
          this.inBody = true;
        }
        if (this.inSnippet && (index > this.bodyEnd || index < this.bodyStart)) {
          this.inBody = false;
        }
        if (this.bodyStart === -1 || this.bodyEnd === -1) {
          this.inBody = false;
        }
        if (this.inSnippet && !this.inBody) {
          continue;
        }
        if (this.inSnippet && this.inBody) {
          continue;
        }

        // Determine if we've found a new snippet
        if (!this.inSnippet && text.indexOf('${', index) === index) {
          // Find index of colon
          var colonIndex = text.indexOf(':', index + 3);
          if (colonIndex !== -1) {
            // Disqualify snippet unless the text between '${' and ':' are digits
            var groupStart = index + 2;
            var groupEnd = colonIndex - 1;
            if (groupEnd >= groupStart) {
              for (var i = groupStart; i < groupEnd; i++) {
                if (isNaN(parseInt(text.charAt(i)))) {
                  colonIndex = -1;
                }
              }
            } else {
              colonIndex = -1;
            }
          }

          // Find index of '}'
          var rightBraceIndex = -1;
          if (colonIndex !== -1) {
            var i = index + 4;
            while (true) {
              rightBraceIndex = text.indexOf('}', i);
              if (rightBraceIndex === -1) {
                break;
              }
              if (text.charAt(rightBraceIndex - 1) === '\\') {
                if (this.escapedBraceIndices == null) {
                  this.escapedBraceIndices = [];
                }
                this.escapedBraceIndices.push(rightBraceIndex - 1);
              } else {
                break;
              }
              i = rightBraceIndex + 1;
            }
          }

          if (colonIndex !== -1 && rightBraceIndex !== -1 && colonIndex < rightBraceIndex) {
            this.inSnippet = true;
            this.inBody = false;
            this.snippetStart = index;
            this.snippetEnd = rightBraceIndex;
            this.bodyStart = colonIndex + 1;
            this.bodyEnd = rightBraceIndex - 1;
            continue;
          } else {
            this.reset();
          }
        }
      }

      return snippets;
    }
  }, {
    key: 'removeBraceEscaping',
    value: function removeBraceEscaping(body, bodyStart, escapedBraceIndices) {
      if (escapedBraceIndices != null) {
        for (var i = 0; i < escapedBraceIndices.length; i++) {
          var bodyIndex = escapedBraceIndices[i];
          body = removeCharFromString(body, bodyIndex - bodyStart - i);
        }
      }
      return body;
    }
  }]);

  return SnippetParser;
})();

exports['default'] = SnippetParser;
;

var removeCharFromString = function removeCharFromString(str, index) {
  return str.slice(0, index) + str.slice(index + 1);
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZC9hdG9tL3NyYy9hdG9tLTEuMzQuMC9vdXQvYXBwL25vZGVfbW9kdWxlcy9hdXRvY29tcGxldGUtcGx1cy9saWIvc25pcHBldC1wYXJzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyxDQUFBOztBQUVYLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLFlBQVksR0FBRyxDQUFDLFlBQVk7QUFBRSxXQUFTLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFBRSxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUFFLFVBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxBQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsQUFBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxBQUFDLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRSxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxBQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FBRTtHQUFFLEFBQUMsT0FBTyxVQUFVLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFO0FBQUUsUUFBSSxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxBQUFDLElBQUksV0FBVyxFQUFFLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxBQUFDLE9BQU8sV0FBVyxDQUFDO0dBQUUsQ0FBQztDQUFFLENBQUEsRUFBRyxDQUFDOztBQUV0akIsU0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRTtBQUFFLE1BQUksRUFBRSxRQUFRLFlBQVksV0FBVyxDQUFBLEFBQUMsRUFBRTtBQUFFLFVBQU0sSUFBSSxTQUFTLENBQUMsbUNBQW1DLENBQUMsQ0FBQztHQUFFO0NBQUU7O0FBRXpKLElBUnFCLGFBQWEsR0FBQSxDQUFBLFlBQUE7QUFTaEMsV0FUbUIsYUFBYSxHQUFBO0FBVTlCLG1CQUFlLENBQUMsSUFBSSxFQVZILGFBQWEsQ0FBQSxDQUFBO0dBVy9COztBQUVELGNBQVksQ0FiTyxhQUFhLEVBQUEsQ0FBQTtBQWM5QixPQUFHLEVBQUUsT0FBTztBQUNaLFNBQUssRUFkRCxTQUFBLEtBQUEsR0FBRztBQUNQLFVBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO0FBQ3RCLFVBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFBO0FBQzFCLFVBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDdEIsVUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNwQixVQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ25CLFVBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDakIsVUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQTtLQUNoQztHQWVBLEVBQUU7QUFDRCxPQUFHLEVBQUUsY0FBYztBQUNuQixTQUFLLEVBZk0sU0FBQSxZQUFBLENBQUMsSUFBSSxFQUFFO0FBQ2xCLFVBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUFFLGVBQU07T0FBRTtBQUM1RCxVQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7QUFDWixVQUFNLFFBQVEsR0FBRyxFQUFFLENBQUE7Ozs7O0FBS25CLFdBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO0FBQ2hELFlBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssRUFBRTtBQUMvQyxjQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUN2RCxjQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQy9FLGtCQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFKLElBQUksRUFBQyxDQUFDLENBQUE7QUFDckksY0FBSSxDQUFDLEtBQUssRUFBRSxDQUFBO0FBQ1osbUJBQVE7U0FDVDs7QUFFRCxZQUFJLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFBRSxjQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtTQUFFO0FBQzlGLFlBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQSxFQUFHO0FBQUUsY0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7U0FBRTtBQUMvRixZQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsRUFBRTtBQUFFLGNBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1NBQUU7QUFDekUsWUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUFFLG1CQUFRO1NBQUU7QUFDaEQsWUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFBRSxtQkFBUTtTQUFFOzs7QUFHL0MsWUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssS0FBSyxFQUFFOztBQUUxRCxjQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDN0MsY0FBSSxVQUFVLEtBQUssQ0FBQyxDQUFDLEVBQUU7O0FBRXJCLGdCQUFNLFVBQVUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFBO0FBQzVCLGdCQUFNLFFBQVEsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFBO0FBQy9CLGdCQUFJLFFBQVEsSUFBSSxVQUFVLEVBQUU7QUFDMUIsbUJBQUssSUFBSSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDMUMsb0JBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUFFLDRCQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUE7aUJBQUU7ZUFDekQ7YUFDRixNQUFNO0FBQ0wsd0JBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQTthQUNoQjtXQUNGOzs7QUFHRCxjQUFJLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUN4QixjQUFJLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUNyQixnQkFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQTtBQUNqQixtQkFBTyxJQUFJLEVBQUU7QUFDWCw2QkFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ3RDLGtCQUFJLGVBQWUsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUFFLHNCQUFLO2VBQUU7QUFDckMsa0JBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO0FBQzdDLG9CQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLEVBQUU7QUFBRSxzQkFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQTtpQkFBRTtBQUN2RSxvQkFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUE7ZUFDbkQsTUFBTTtBQUNMLHNCQUFLO2VBQ047QUFDRCxlQUFDLEdBQUcsZUFBZSxHQUFHLENBQUMsQ0FBQTthQUN4QjtXQUNGOztBQUVELGNBQUksVUFBVSxLQUFLLENBQUMsQ0FBQyxJQUFJLGVBQWUsS0FBSyxDQUFDLENBQUMsSUFBSSxVQUFVLEdBQUcsZUFBZSxFQUFFO0FBQy9FLGdCQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtBQUNyQixnQkFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7QUFDbkIsZ0JBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFBO0FBQ3pCLGdCQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQTtBQUNqQyxnQkFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFBO0FBQy9CLGdCQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsR0FBRyxDQUFDLENBQUE7QUFDbEMscUJBQVE7V0FDVCxNQUFNO0FBQ0wsZ0JBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtXQUNiO1NBQ0Y7T0FDRjs7QUFFRCxhQUFPLFFBQVEsQ0FBQTtLQUNoQjtHQWtDQSxFQUFFO0FBQ0QsT0FBRyxFQUFFLHFCQUFxQjtBQUMxQixTQUFLLEVBbENhLFNBQUEsbUJBQUEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFO0FBQ3pELFVBQUksbUJBQW1CLElBQUksSUFBSSxFQUFFO0FBQy9CLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDbkQsY0FBTSxTQUFTLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDeEMsY0FBSSxHQUFHLG9CQUFvQixDQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQzdEO09BQ0Y7QUFDRCxhQUFPLElBQUksQ0FBQTtLQUNaO0dBbUNBLENBQUMsQ0FBQyxDQUFDOztBQUVKLFNBbEltQixhQUFhLENBQUE7Q0FtSWpDLENBQUEsRUFBRyxDQUFDOztBQUVMLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FySUcsYUFBYSxDQUFBO0FBOEZqQyxDQUFDOztBQUVGLElBQU0sb0JBQW9CLEdBQUcsU0FBdkIsb0JBQW9CLENBQUksR0FBRyxFQUFFLEtBQUssRUFBQTtBQXlDdEMsU0F6QzJDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFBO0NBQUEsQ0FBQTtBQTJDdkYsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMiLCJmaWxlIjoiL2J1aWxkL2F0b20vc3JjL2F0b20tMS4zNC4wL291dC9hcHAvbm9kZV9tb2R1bGVzL2F1dG9jb21wbGV0ZS1wbHVzL2xpYi9zbmlwcGV0LXBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNuaXBwZXRQYXJzZXIge1xuICByZXNldCAoKSB7XG4gICAgdGhpcy5pblNuaXBwZXQgPSBmYWxzZVxuICAgIHRoaXMuaW5TbmlwcGV0Qm9keSA9IGZhbHNlXG4gICAgdGhpcy5zbmlwcGV0U3RhcnQgPSAtMVxuICAgIHRoaXMuc25pcHBldEVuZCA9IC0xXG4gICAgdGhpcy5ib2R5U3RhcnQgPSAtMVxuICAgIHRoaXMuYm9keUVuZCA9IC0xXG4gICAgdGhpcy5lc2NhcGVkQnJhY2VJbmRpY2VzID0gbnVsbFxuICB9XG5cbiAgZmluZFNuaXBwZXRzICh0ZXh0KSB7XG4gICAgaWYgKHRleHQubGVuZ3RoIDw9IDAgfHwgdGV4dC5pbmRleE9mKCckJykgPT09IC0xKSB7IHJldHVybiB9IC8vIE5vIHNuaXBwZXRzXG4gICAgdGhpcy5yZXNldCgpXG4gICAgY29uc3Qgc25pcHBldHMgPSBbXVxuXG4gICAgLy8gV2UncmUgbm90IHVzaW5nIGEgcmVnZXggYmVjYXVzZSBlc2NhcGVkIHJpZ2h0IGJyYWNlcyBjYW5ub3QgYmUgdHJhY2tlZCB3aXRob3V0IGxvb2tiZWhpbmQsXG4gICAgLy8gd2hpY2ggZG9lc24ndCBleGlzdCB5ZXQgZm9yIGphdmFzY3JpcHQ7IGNvbnNlcXVlbnRseSB3ZSBuZWVkIHRvIGl0ZXJhdGUgdGhyb3VnaCBlYWNoIGNoYXJhY3Rlci5cbiAgICAvLyBUaGlzIG1pZ2h0IGZlZWwgdWdseSwgYnV0IGl0J3MgbmVjZXNzYXJ5LlxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0ZXh0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKHRoaXMuaW5TbmlwcGV0ICYmIHRoaXMuc25pcHBldEVuZCA9PT0gaW5kZXgpIHtcbiAgICAgICAgbGV0IGJvZHkgPSB0ZXh0LnNsaWNlKHRoaXMuYm9keVN0YXJ0LCB0aGlzLmJvZHlFbmQgKyAxKVxuICAgICAgICBib2R5ID0gdGhpcy5yZW1vdmVCcmFjZUVzY2FwaW5nKGJvZHksIHRoaXMuYm9keVN0YXJ0LCB0aGlzLmVzY2FwZWRCcmFjZUluZGljZXMpXG4gICAgICAgIHNuaXBwZXRzLnB1c2goe3NuaXBwZXRTdGFydDogdGhpcy5zbmlwcGV0U3RhcnQsIHNuaXBwZXRFbmQ6IHRoaXMuc25pcHBldEVuZCwgYm9keVN0YXJ0OiB0aGlzLmJvZHlTdGFydCwgYm9keUVuZDogdGhpcy5ib2R5RW5kLCBib2R5fSlcbiAgICAgICAgdGhpcy5yZXNldCgpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmluU25pcHBldCAmJiBpbmRleCA+PSB0aGlzLmJvZHlTdGFydCAmJiBpbmRleCA8PSB0aGlzLmJvZHlFbmQpIHsgdGhpcy5pbkJvZHkgPSB0cnVlIH1cbiAgICAgIGlmICh0aGlzLmluU25pcHBldCAmJiAoaW5kZXggPiB0aGlzLmJvZHlFbmQgfHwgaW5kZXggPCB0aGlzLmJvZHlTdGFydCkpIHsgdGhpcy5pbkJvZHkgPSBmYWxzZSB9XG4gICAgICBpZiAodGhpcy5ib2R5U3RhcnQgPT09IC0xIHx8IHRoaXMuYm9keUVuZCA9PT0gLTEpIHsgdGhpcy5pbkJvZHkgPSBmYWxzZSB9XG4gICAgICBpZiAodGhpcy5pblNuaXBwZXQgJiYgIXRoaXMuaW5Cb2R5KSB7IGNvbnRpbnVlIH1cbiAgICAgIGlmICh0aGlzLmluU25pcHBldCAmJiB0aGlzLmluQm9keSkgeyBjb250aW51ZSB9XG5cbiAgICAgIC8vIERldGVybWluZSBpZiB3ZSd2ZSBmb3VuZCBhIG5ldyBzbmlwcGV0XG4gICAgICBpZiAoIXRoaXMuaW5TbmlwcGV0ICYmIHRleHQuaW5kZXhPZignJHsnLCBpbmRleCkgPT09IGluZGV4KSB7XG4gICAgICAgIC8vIEZpbmQgaW5kZXggb2YgY29sb25cbiAgICAgICAgbGV0IGNvbG9uSW5kZXggPSB0ZXh0LmluZGV4T2YoJzonLCBpbmRleCArIDMpXG4gICAgICAgIGlmIChjb2xvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIC8vIERpc3F1YWxpZnkgc25pcHBldCB1bmxlc3MgdGhlIHRleHQgYmV0d2VlbiAnJHsnIGFuZCAnOicgYXJlIGRpZ2l0c1xuICAgICAgICAgIGNvbnN0IGdyb3VwU3RhcnQgPSBpbmRleCArIDJcbiAgICAgICAgICBjb25zdCBncm91cEVuZCA9IGNvbG9uSW5kZXggLSAxXG4gICAgICAgICAgaWYgKGdyb3VwRW5kID49IGdyb3VwU3RhcnQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBncm91cFN0YXJ0OyBpIDwgZ3JvdXBFbmQ7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoaXNOYU4ocGFyc2VJbnQodGV4dC5jaGFyQXQoaSkpKSkgeyBjb2xvbkluZGV4ID0gLTEgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2xvbkluZGV4ID0gLTFcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIGluZGV4IG9mICd9J1xuICAgICAgICBsZXQgcmlnaHRCcmFjZUluZGV4ID0gLTFcbiAgICAgICAgaWYgKGNvbG9uSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgbGV0IGkgPSBpbmRleCArIDRcbiAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgcmlnaHRCcmFjZUluZGV4ID0gdGV4dC5pbmRleE9mKCd9JywgaSlcbiAgICAgICAgICAgIGlmIChyaWdodEJyYWNlSW5kZXggPT09IC0xKSB7IGJyZWFrIH1cbiAgICAgICAgICAgIGlmICh0ZXh0LmNoYXJBdChyaWdodEJyYWNlSW5kZXggLSAxKSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmVzY2FwZWRCcmFjZUluZGljZXMgPT0gbnVsbCkgeyB0aGlzLmVzY2FwZWRCcmFjZUluZGljZXMgPSBbXSB9XG4gICAgICAgICAgICAgIHRoaXMuZXNjYXBlZEJyYWNlSW5kaWNlcy5wdXNoKHJpZ2h0QnJhY2VJbmRleCAtIDEpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSA9IHJpZ2h0QnJhY2VJbmRleCArIDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29sb25JbmRleCAhPT0gLTEgJiYgcmlnaHRCcmFjZUluZGV4ICE9PSAtMSAmJiBjb2xvbkluZGV4IDwgcmlnaHRCcmFjZUluZGV4KSB7XG4gICAgICAgICAgdGhpcy5pblNuaXBwZXQgPSB0cnVlXG4gICAgICAgICAgdGhpcy5pbkJvZHkgPSBmYWxzZVxuICAgICAgICAgIHRoaXMuc25pcHBldFN0YXJ0ID0gaW5kZXhcbiAgICAgICAgICB0aGlzLnNuaXBwZXRFbmQgPSByaWdodEJyYWNlSW5kZXhcbiAgICAgICAgICB0aGlzLmJvZHlTdGFydCA9IGNvbG9uSW5kZXggKyAxXG4gICAgICAgICAgdGhpcy5ib2R5RW5kID0gcmlnaHRCcmFjZUluZGV4IC0gMVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZXNldCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc25pcHBldHNcbiAgfVxuXG4gIHJlbW92ZUJyYWNlRXNjYXBpbmcgKGJvZHksIGJvZHlTdGFydCwgZXNjYXBlZEJyYWNlSW5kaWNlcykge1xuICAgIGlmIChlc2NhcGVkQnJhY2VJbmRpY2VzICE9IG51bGwpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXNjYXBlZEJyYWNlSW5kaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBib2R5SW5kZXggPSBlc2NhcGVkQnJhY2VJbmRpY2VzW2ldXG4gICAgICAgIGJvZHkgPSByZW1vdmVDaGFyRnJvbVN0cmluZyhib2R5LCBib2R5SW5kZXggLSBib2R5U3RhcnQgLSBpKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9keVxuICB9XG59O1xuXG5jb25zdCByZW1vdmVDaGFyRnJvbVN0cmluZyA9IChzdHIsIGluZGV4KSA9PiBzdHIuc2xpY2UoMCwgaW5kZXgpICsgc3RyLnNsaWNlKGluZGV4ICsgMSlcbiJdfQ==