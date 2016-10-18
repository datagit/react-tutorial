/**
 * Created by ubuntu on 18/10/2016.
 */
var CommentBox = React.createClass({
   render: function () {
       return (
           <div className="commentBox">
               Hello this is a CommentBox
           </div>
       );
   }
});

ReactDOM.render(
    <CommentBox/>,
    document.getElementById('content')
);