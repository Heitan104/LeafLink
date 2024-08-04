// src/pages/api/data.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const apiKey = "bdd4640e-9c06-47b2-994c-c1e806a55c84"; // Store your API key in an environment variable
    const body = req.body;

    try {
      const response = await fetch(
        "https://data-api.globalforestwatch.org/dataset/wur_radd_alerts/latest/query",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
          },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
