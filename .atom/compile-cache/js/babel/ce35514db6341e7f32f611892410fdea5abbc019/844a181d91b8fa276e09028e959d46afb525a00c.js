function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helperToggleClassName = require('../helper/toggle-class-name');

var _helperToggleClassName2 = _interopRequireDefault(_helperToggleClassName);

'use babel';

atom.config.observe('atom-material-ui.tabs.tintedTabBar', function (value) {
    (0, _helperToggleClassName2['default'])('amu-tinted-tab-bar', value);
});

atom.config.observe('atom-material-ui.tabs.compactTabs', function (value) {
    (0, _helperToggleClassName2['default'])('amu-compact-tab-bar', value);
});

atom.config.observe('atom-material-ui.tabs.noTabMinWidth', function (value) {
    (0, _helperToggleClassName2['default'])('amu-no-tab-min-width', value);
});

atom.config.observe('atom-material-ui.tabs.stretchedTabs', function (value) {
    (0, _helperToggleClassName2['default'])('amu-stretched-tabs', value);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dob3N0Ly5hdG9tL3BhY2thZ2VzL2F0b20tbWF0ZXJpYWwtdWkvbGliL3RhYi1iYXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7cUNBRTRCLDZCQUE2Qjs7OztBQUZ6RCxXQUFXLENBQUM7O0FBSVosSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsb0NBQW9DLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDakUsNENBQWdCLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ2hELENBQUMsQ0FBQzs7QUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQ0FBbUMsRUFBRSxVQUFDLEtBQUssRUFBSztBQUNoRSw0Q0FBZ0IscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDakQsQ0FBQyxDQUFDOztBQUVILElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ2xFLDRDQUFnQixzQkFBc0IsRUFBRSxLQUFLLENBQUMsQ0FBQztDQUNsRCxDQUFDLENBQUM7O0FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDbEUsNENBQWdCLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ2hELENBQUMsQ0FBQyIsImZpbGUiOiIvaG9tZS9naG9zdC8uYXRvbS9wYWNrYWdlcy9hdG9tLW1hdGVyaWFsLXVpL2xpYi90YWItYmFyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmltcG9ydCB0b2dnbGVDbGFzc05hbWUgZnJvbSAnLi4vaGVscGVyL3RvZ2dsZS1jbGFzcy1uYW1lJztcblxuYXRvbS5jb25maWcub2JzZXJ2ZSgnYXRvbS1tYXRlcmlhbC11aS50YWJzLnRpbnRlZFRhYkJhcicsICh2YWx1ZSkgPT4ge1xuICAgIHRvZ2dsZUNsYXNzTmFtZSgnYW11LXRpbnRlZC10YWItYmFyJywgdmFsdWUpO1xufSk7XG5cbmF0b20uY29uZmlnLm9ic2VydmUoJ2F0b20tbWF0ZXJpYWwtdWkudGFicy5jb21wYWN0VGFicycsICh2YWx1ZSkgPT4ge1xuICAgIHRvZ2dsZUNsYXNzTmFtZSgnYW11LWNvbXBhY3QtdGFiLWJhcicsIHZhbHVlKTtcbn0pO1xuXG5hdG9tLmNvbmZpZy5vYnNlcnZlKCdhdG9tLW1hdGVyaWFsLXVpLnRhYnMubm9UYWJNaW5XaWR0aCcsICh2YWx1ZSkgPT4ge1xuICAgIHRvZ2dsZUNsYXNzTmFtZSgnYW11LW5vLXRhYi1taW4td2lkdGgnLCB2YWx1ZSk7XG59KTtcblxuYXRvbS5jb25maWcub2JzZXJ2ZSgnYXRvbS1tYXRlcmlhbC11aS50YWJzLnN0cmV0Y2hlZFRhYnMnLCAodmFsdWUpID0+IHtcbiAgICB0b2dnbGVDbGFzc05hbWUoJ2FtdS1zdHJldGNoZWQtdGFicycsIHZhbHVlKTtcbn0pO1xuIl19