import axios from "axios";

export const PinFilesToIPFS = async (formData) => {
    try {
        const config = {
            method: 'post',
            url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1MDczN2VmOC00MzIwLTRlMWYtOTUxZC1hNmE5MGE4YjQ0MmYiLCJlbWFpbCI6ImthcnRoaWNrc2FrdGhpMTI0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJkOWU3YWU4MWQ1OWZkNzk4NGRjYyIsInNjb3BlZEtleVNlY3JldCI6IjIwYTE3YjIzNDc5MDU1ODU0YWUyODI0MmFiN2Y5MDUxY2EzNjExNGQ1NTI5MmZkZGI5YTU2MWYwY2JiZWY5YmMiLCJpYXQiOjE2NjI3MjA4MDV9.OXfwSkhEH3ieZg_ctvK6Xv5GqZGw51vMJIJZhptVpCU',
                'Content-Type': 'multipart/form-data'
            },
            data : formData
        }

        return axios(config)

    } catch (err) {
        console.log(err)
        throw err
    }
}

