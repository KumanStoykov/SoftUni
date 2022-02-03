function solution(input) {

    const commandParser = {
        upvote: () => {
            this.upvotes += 1;
        },
        downvote: () => {
            this.downvotes += 1;
        },
        score: () => {
            let u = this.upvotes;
            let d = this.downvotes;

            return [increaseUp(u, d), increaseDown(u, d), checkDifferent(u, d), rating(u, d)];
        }
    }
    function increaseUp(up, down) {

        if (up + down > 50) {
            const maxN = Math.ceil(Math.max(up, down) * 0.25);
            up += maxN;
        }
        return up > 0 ? up : 0;
    }
    function increaseDown(up, down) {

        if (up + down > 50) {
            const maxN = Math.ceil(Math.max(up, down) * 0.25);
            down += maxN;
        }
        return down > 0 ? down : 0;
    }

    function checkDifferent(up, down) {
        return up - down;
    }
    function rating(up, down) {

        if (up + down < 10) {
            return 'new';
        }
        if (up > (up + down) * 0.66) {
            return 'hot';
        }
        if (up - down >= 0 && (up > 100 || down > 100)) {
            return 'controversial';
        }
        if ((up - down) < 0) {
            return 'unpopular';
        }
        return 'new';
    }
    return commandParser[input]();
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 49,
};
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'upvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
solution.call(post, 'downvote');
