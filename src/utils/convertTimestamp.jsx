export const convertTimeStamp = (timestamp) => {
    console.log(timestamp);
    const date = new Date(timestamp);
    const dateFormat = {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", dateFormat);
    const time = formattedDate.replace(/,/g, "");
    return time;
  };