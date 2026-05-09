use axum::{Json, Router, routing::post};

struct User {
    name: String,
}

#[tokio::main]
async fn main() {
    let mut app = Router::new();
    let listener = tokio::net::TcpListener::bind("0.0.0.0:8080").await.unwrap();
    println!("Server running on http://0.0.0.0:8080");
    app = router(app);
    axum::serve(listener, app).await.unwrap();
}

fn router(app: Router) -> Router {
    app.route("/login", post(sign_up))
}

async fn sign_up(Json(payload): Json<serde_json::Value>) {
    let user: User = User{ name: payload["name"].to_string() };
    println!("{}", user.name);
}
