from flask import Flask, render_template, request, render_template_string

app = Flask(__name__)


@app.route("/")
def homepage():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0",debug=True)
