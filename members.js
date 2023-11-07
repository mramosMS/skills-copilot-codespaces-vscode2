function skillsMember() {
    return {
        restrict: 'E',
        scope: {
            member: '=',
            skills: '='
        },
        templateUrl: 'app/members/skills.html'
    };
}