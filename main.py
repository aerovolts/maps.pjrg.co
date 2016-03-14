from flask import Flask, render_template

app = Flask(__name__)

author = 'Patrick Guelcher'
year = '2016'

@app.route('/')
def home():
    title = 'Maps Index | Patrick Guelcher'
    description = 'The central index of web mapping projects created by Patrick Guelcher.'
    return render_template('pages/index.html', author=author, year=year, title=title, description=description)

@app.route('/election-2016-primaries')
def about():
    title = 'Primary Results | 2016 Presidential Electon'
    description = 'A web map displaying the results of the 2016 Presidential Election primaries and caucuses.'
    return render_template('pages/election-2016-primaries.html', author=author, year=year, title=title, description=description)

@app.route('/election-2016-general')
def portfolio():
    title = 'General Results | 2016 Presidential Election'
    description = 'A web map displaying the results of the 2016 General Presidential Election in November 2016.'
    return render_template('pages/election-2016-general.html', author=author, year=year, title=title, description=description)

if __name__ == '__main__':
    app.run()
