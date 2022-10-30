let navbar = () => {
  return `
<div id="navbarDiv">
    <div id="logoDiv">
    <img src="https://d2v8elt324ukrb.cloudfront.net/static/riotuikit/images/logo.c72056a22f91.png" alt="" onclick="changeWindow()">
    </div>

    <div id="navbarSecondPartition">
        <i class='fa fa-user red-color' onclick="userLogoPopUp()"></i>
        <h4 onclick= "inrPopUp()">INR 🢗</h4>
        <div id="menuLogoDiv" onclick="renderMenuTab()">
            <img src="https://icon-library.com/images/hamburger-icon-white/hamburger-icon-white-6.jpg" alt="">
        </div>
    </div>
</div>
    `;
};

export default navbar()