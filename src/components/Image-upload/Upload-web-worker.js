// importScripts("https://unpkg.com/axios/dist/axios.min.js");

// const corsHeaders = {
//   "Access-Control-Allow-Headers": "*",
//   "Access-Control-Allow-Methods": "POST",
//   "Access-Control-Allow-Origin": "*",
// };

// async function uploadImage(formData) {
//   try {
//     const response = await axios.post(
//       "https://api.cloudinary.com/v1_1/djmqtevix/image/upload",
//       formData,
//       {
//         mode: 'cors'
//       }
//     );
//     if (response.status === 200) {
//       return response;
//     }
//   } catch (err) {
//     return err;
//   }
// }

onmessage = (e) => {
  // const response = uploadImage(formData);
  // console.log(response);
  postMessage({
    status: "success",
  });
};
