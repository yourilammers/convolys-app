from django.urls import path
from django.views.generic import TemplateView

from . import views

app_name = 'web'
urlpatterns = [
    path('landing', views.landing, name='landing'),
    path('', views.landing, name='landing'),
    path('home', views.home, name='home'),
    path('dashboard_changelog', views.dashboard_changelog, name='dashboard_changelog'),
    path('dashboard_getting_started', views.dashboard_getting_started, name='dashboard_getting_started'),

    
    path('terms/', TemplateView.as_view(template_name="web/terms.html"), name='terms'),
    path('robots.txt', TemplateView.as_view(template_name="robots.txt", content_type="text/plain"), name='robots.txt'),
    # these views are just for testing error pages
    # actual error handling is handled by Django: https://docs.djangoproject.com/en/4.1/ref/views/#error-views
    path('400/', TemplateView.as_view(template_name='400.html'), name='400'),
    path('403/', TemplateView.as_view(template_name='403.html'), name='403'),
    path('404/', TemplateView.as_view(template_name='404.html'), name='404'),
    path('500/', TemplateView.as_view(template_name='500.html'), name='500'),
    path('simulate_error/', views.simulate_error),
]

team_urlpatterns = ([
    path('', views.team_home, name='home'),
], 'web_team')
