//
//
// function InfiniteScroll(props) {
//     const [postList, setPostList] = useState({
//         list: [1,2,3,4]
//     });
//     const [page, setPage] = useState(1);
//     const loader = useRef(null);
//
//     const handleObserver = (entities) => {
//         const target = entities[0];
//         if (target.isIntersecting) {
//             setPage((page) => page + 1)
//         }
//     }
//
//
//     useEffect(() => {
//         var options = {
//             root: null,
//             rootMargin: "20px",
//             threshold: 1.0
//         };
//         // initialize IntersectionObserver
//         // and attaching to Load More div
//         const observer = new IntersectionObserver(handleObserver, options);
//         if (loader.current) {
//             observer.observe(loader.current)
//         }
//
//     }, []);
//
//     useEffect(() => {
//         // here we simulate adding new posts to List
//         const newList = postList.list.concat([1,1,1,1]);
//         setPostList({
//             list: newList
//         })
//     }, [page])
//
//     // here we handle what happens when user scrolls to Load More div
//     // in this case we just update page variable
//
//     return (
//         <div className="container">
//             <div className="post-list">
//                 {
//                     postList.list.map((post, index) => {
//                         return (<div key={index} className="post">
//                             <h2> {post } </h2>
//                         </div>)
//                     })
//                 }
//                 <div className="loading" ref={loader}>
//                     <h2>Load More</h2>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
//
// export default InfiniteScroll;
