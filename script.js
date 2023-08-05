function toggleSideBarButton() {
  const sidebar = document.getElementById("sb");
  const sidebarWidth = 200; // Adjust this value to match the actual sidebar width

  // Check if the sidebar is currently open or closed
  if (sidebar.style.right === "0px") {
    // Close the sidebar
    sidebar.style.right = `-${sidebarWidth}px`;
  } else {
    // Open the sidebar
    sidebar.style.right = "0px";
  }
}
