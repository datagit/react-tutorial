/**
 * Created by ubuntu on 18/10/2016.
 */
//Using props and props.children

var CommentList = React.createClass({
    render: function () {
        return (
          <div className="commentList">
              <Comment author="dat.dao">hello, how are you?</Comment>
              <Comment author="mrABC">I'm fine thanks</Comment>
          </div>
        );
    }
});

ReactDOM.render(
    <CommentList/>,
    document.getElementById('content')
);