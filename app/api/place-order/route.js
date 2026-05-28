export async function POST(req, { env }) {
  try {
    const body = await req.json();

    const {
      customer_name,
      mobile,
      address,
      medicines,
      total,
      payment_method,
      coupon_code,
    } = body;

    await env.DB.prepare(
      `INSERT INTO orders 
      (customer_name, mobile, address, medicines, total, payment_method, coupon_code)
      VALUES (?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(
        customer_name,
        mobile,
        address,
        JSON.stringify(medicines),
        total,
        payment_method,
        coupon_code || ""
      )
      .run();

    return Response.json({
      success: true,
      message: "Order placed successfully",
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
