setInterval(async () => {
    const updatedData = await updateMarketData();
    // Cập nhật giao diện người dùng với dữ liệu mới
  }, 30000); // Cập nhật mỗi 30 giây
  