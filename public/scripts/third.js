/**
 * Created by ubuntu on 18/10/2016.
 */
var CommentBox = React.createClass({
    render: function () {
      return (
          <div className="commentBox">
              <h1>Comments</h1>
              <CommentList />
              <CommentForm />
          </div>
      );
    }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);