use axum::{Json, Router, routing::post};
use tower_http::cors::{Any, CorsLayer};

const ADDRESS: &str = "0.0.0.0:8080";

struct User {
    name: String,
}

#[tokio::main]
async fn main() {
    let listener = tokio::net::TcpListener::bind(ADDRESS).await.unwrap();
    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods(Any)
        .allow_headers(Any);
    let app = router().layer(cors);

    println!("Server running on http://{ADDRESS}");
    axum::serve(listener, app).await.unwrap();
}

fn router() -> Router {
    Router::new().route("/login", post(sign_up))
}

async fn sign_up(Json(payload): Json<serde_json::Value>) {
    let user: User = User {
        name: payload["name"].to_string(),
    };
    println!("{}", user.name);
}
